import axios from 'axios';

const initialState = {
  loggedIn: false,
  user: {}
};

const GETUSER = 'GETUSER';

export function getUser() {
  return {
    type: GETUSER,
    payload: axios.get('/auth/me').then(res => {
      if (!res.data) {
        return {
          loggedIn: false,
          user: {}
        };
      } else {
        let firstName = res.data.username.split(' ')[0];
        firstName = firstName[0].toUpperCase() + firstName.slice(1);
        return {
          loggedIn: true,
          user: {
            firstName: firstName,
            email: res.data.email,
            image: res.data.image,
            id: res.data.id
          }
        };
      }
    })
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GETUSER:
      return Object.assign({}, state, action.payload);
    case GETUSER + '_FULFILLED':
      return Object.assign({}, state, action.payload);
  }
  return state;
}
