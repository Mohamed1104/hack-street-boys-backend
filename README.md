dependancies installed:
npm init --yes
npm install express
npm install nodemon
npm install pg
npm install dotenv --save
npm i morgan
npm i supertest
npm i jest

sql url: postgres://kimylvwv:rt4QrJD3_0IF1MRCRgpK-b_kdYiXfjAu@lucky.db.elephantsql.com/kimylvwv

//database

Create Table users(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT
);

INSERT into users
(name)
VALUES
('Mohamed'),
('Joe'),
('Fas'),
('Lewis');

CREATE Table posts(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
user_id INTEGER REFERENCES users(id),
post_text TEXT,
week_number INTEGER,
topic TEXT
);

INSERT into posts
(user_id,post_text, week_number, topic)
VALUES
(1,'The Virtual DOM
In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy.

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.', 7, 'Rendering'),
(2,'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.',7 ,'components'),
(3,'The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application. ',7, 'useState'),
(4,'The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.', 8,'useReducer');

CREATE Table comments(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
user_id INTEGER REFERENCES users(id),
post_id INTEGER REFERENCES posts(id),
comment TEXT
);

INSERT into comments
(user_id ,post_id, comment)
VALUES
(1 , 1 ,'that was cool!'),
(4 , 2 ,'thanks needed that'),
(2 , 3 ,'Awesome'),
(3 , 4 ,'thank you!'),
(3 , 4 ,'thank yo!');
