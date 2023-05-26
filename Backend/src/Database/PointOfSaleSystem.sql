-- Active: 1684760780502@@localhost@3306
DROP DATABASE IF EXISTS PointOfSale;
CREATE DATABASE PointOfSale;
USE PointOfSale;

CREATE TABLE Products(
    ProductId INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(30),
    ProductCount INT,
    ProductCost INT
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
    OrderDate VARCHAR(30), 
    ArrivalDate VARCHAR(30),
    OrderCount INT
);
    
INSERT INTO Orders VALUES
(DEFAULT, "Hammers order",'2023-01-12','2023-09-22', 43),
(DEFAULT, "Nails orders",'2023-02-11','2023-09-22', 41),
(DEFAULT, "Screw Drivers orders",'2023-03-10','2023-09-22', 44),
(DEFAULT, "Screws orders",'2023-04-09','2023-09-22', 45),
(DEFAULT, "Pliers orders",'2023-05-08','2023-09-22', 46);

CREATE TABLE Bought(
    id INT AUTO_INCREMENT PRIMARY KEY,
    BoughtItem VARCHAR(30),
    BoughtCount INT,
    BoughtPrice INT
);

INSERT INTO Bought VALUES
(DEFAULT, "TEST VALUE", 1, 2000);

CREATE TABLE Static(
    id INT AUTO_INCREMENT PRIMARY KEY,
    StaticItem VARCHAR(30),
    StaticCount INT
);

INSERT INTO Static VALUES
(DEFAULT, "Hammers", 23);

DELETE FROM `PointOfSale`.`Static`;