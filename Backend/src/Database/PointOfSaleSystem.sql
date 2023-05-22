-- Active: 1684760780502@@localhost@3306
DROP DATABASE IF EXISTS PointOfSale;
CREATE DATABASE PointOfSale;
USE PointOfSale;

CREATE TABLE Products(
    ProductId INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(30),
    ProductCount VARCHAR(30),
    ProductCost VARCHAR(30)
);

INSERT INTO Products VALUES
(DEFAULT, "Hammers", 23, 1400),
(DEFAULT, "Nails", 100, 1500),
(DEFAULT, "Screw Drivers", 43, 1600),
(DEFAULT, "Screws", 2000, 1700),
(DEFAULT, "Pliers", 12, 1300);

CREATE TABLE Orders(
    OrderId INT PRIMARY KEY AUTO_INCREMENT,
    OrderedItem VARCHAR(30),
    OrderDate DATE, 
    ArrivalDate DATE,
    OrderCount INT
);
    
INSERT INTO Orders VALUES
(DEFAULT, "Hammers order",'2023-01-12','2023-09-22', 43),
(DEFAULT, "Nails orders",'2023-02-11','2023-09-22', 41),
(DEFAULT, "Screw Drivers orders",'2023-03-10','2023-09-22', 44),
(DEFAULT, "Screws orders",'2023-04-09','2023-09-22', 45),
(DEFAULT, "Pliers orders",'2023-05-08','2023-09-22', 46);
