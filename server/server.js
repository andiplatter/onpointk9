require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const session = require('express-session');

const app = express();

app.use(express.static(__dirname + '/../build'));

app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

massive({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: true
}).then(db => {
  app.set('db', db);
});

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      const db = app.get('db');
      console.log(profile);
      db
        .find_user([profile.id])
        .then(user => {
          console.log('found user', user);
          user.admin = true;
          if (user[0]) {
            return done(null, user);
          } else {
            console.log('creating user');
            db
              .create_user([
                profile.displayName,
                profile.emails[0].value,
                profile.picture,
                profile.id
              ])
              .then(user => {
                return done(null, user[0]);
              })
              .catch(err => console.log('second', err));
          }
        })
        .catch(err => console.log('first', err));
    }
  )
);

app.get('/auth', passport.authenticate('auth0'));

app.get(
  '/auth/callback',
  passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/#/'
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // app.get('db').find_session_user([user.id]).then(user => {
  //   done(null, user[0]);
  // });
  done(null, user[0]);
});

app.get('/auth/me', (req, res, next) => {
  if (!req.user) {
    return res.status(200).send(false);
  } else {
    return res.status(200).send(req.user);
  }
  res.status(status).send(response);
});

app.get('/auth/logout', (req, res) => {
  req.logOut();
  res.redirect(302, 'http://localhost:3000/#/');
});

//-----end points----------
// app.post('/api/appointment', (req, res) => {
//   const db = app.get('db');
//   let {
//     aptdate,
//     timeslot,
//     serviceID,
//     userID,
//     phone,
//     dogBreed,
//     dogName,
//     fixed,
//     gender,
//     info
//   } = req.body;
//   db
//     .postAppointment([
//       aptdate,
//       timeslot,
//       serviceID,
//       userID,
//       phone,
//       dogBreed,
//       dogName,
//       fixed,
//       gender,
//       info
//     ])
//     .then(response => {
//       res.status(200).send(response[0]);
//     });
// });

app.get('/api/services', (req, res) => {
  const db = app.get('db');
  db.getServices().then(response => {
    res.status(200).send(response);
  });
});

app.post('/api/appointment', (req, res) => {
  const db = app.get('db');
  console.log('APOINTMENT!!!!!!!!!!!!!!');
  console.log(req.body.appointment);
  db
    .postAppointment(req.body.appointment)
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/api/appointments', (req, res) => {
  const db = app.get('db');
  db
    .getAppointments()
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
    });
});

let PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
