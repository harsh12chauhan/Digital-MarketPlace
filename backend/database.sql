CREATE DATABASE hardwarestore;

CREATE TABLE userdetails (
    userid SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    address VARCHAR(255),
    block BOOL DEFAULT false,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productDetails (
    productid SERIAL PRIMARY KEY,
    pname VARCHAR(255),
    pdescription VARCHAR(255),
    pprice VARCHAR(255),
    pquantity VARCHAR(255),
    pimage VARCHAR(255),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

