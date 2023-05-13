-- Active: 1684004119409@@127.0.0.1@3306
DROP DATABASE IF EXISTS TestPOS;
CREATE DATABASE TestPOS;
USE TestPOS;

CREATE TABLE Products(
    ProductId INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(30),
    ProductCount INT
);

INSERT INTO Products VALUES
(DEFAULT, "Hammers", 23),
(DEFAULT, "Nails", 100),
(DEFAULT, "Screw Drivers", 123),
(DEFAULT, "Screws", 2000),
(DEFAULT, "Pliers", 12);

CREATE TABLE Orders(
    OrderId INT PRIMARY KEY AUTO_INCREMENT,
    OrderedItem VARCHAR(30),
    OrderDate DATE, 
    ArrivalDate DATE
);
    
INSERT INTO Orders VALUES
(DEFAULT, "Hammers",'2023-01-12','2023-09-22' ),
(DEFAULT, "Nails",'2023-02-11','2023-09-22' ),
(DEFAULT, "Screw Drivers",'2023-03-10','2023-09-22' ),
(DEFAULT, "Screws",'2023-04-09','2023-09-22' ),
(DEFAULT, "Pliers",'2023-05-08','2023-09-22' );
