create table users
  (
    id serial primary key,
    username varchar(20) not null,
    email varchar(40) not null,
    image text,
    auth_id text not null
  );
