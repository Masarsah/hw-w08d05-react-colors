DROP DATABASE IF EXISTS colors;
CREATE DATABASE colors;

\c colors
CREATE TABLE color(
    id serial PRIMARY KEY,
    name VARCHAR,
    rgb  VARCHAR,
    hex VARCHAR
);



    INSERT INTO color(name,rgb,hex)VALUES
    
('pink','233,30,99','#E91E63'),
('pink','233,5,33','#E91E63'),
('pink','233,30,94','#E91E63'),
('Gold ','255,215,0','#FFD700');