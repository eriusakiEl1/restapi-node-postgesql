create database firstsapi;
create table users (id serial primary key,
                    name varchar(40),
                    email text);

insert into users(name, email) values('yo', 'yo@itc.mx'), ('ryan', 'ryan@email.com');