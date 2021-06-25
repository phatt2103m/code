
CREATE DATABASE Tiki

USE Tiki

go 


CREATE TABLE Product(
	Id int,
	name nvarchar(225),
	Price int,
	status varchar(225),
	Qty int
);
CREATE TABLE Customer(
    CusId int,
	name nvarchar(225),
	email varchar(225),
	phone varchar(225),
	level int,
	status varchar(225)
	)

INSERT INTO Product Values (1,'Iphone',3000,'con hang',500);
INSERT INTO Product Values (2,'SamSung',1000,'con hang',800);
INSERT INTO Product Values (3,'OPPO',500,'Het Hang',0);
INSERT INTO Product Values (4,'Vertu',10000,'con hang',40);

INSERT INTO Customer Values (1,'Phat','abc@gmail.com',246282875,1,'Block');
INSERT INTO Customer Values (2,'Phuc','Phatncth@gamil.com',028634284,4,'VIP');
INSERT INTO Customer Values (3,'Thanh','ajav@gmail.com',242423435,2,'VIP');
INSERT INTO Customer Values (4,'Anh','avasj@gmail.com',11111111,1,'Block');

UPDATE Product SET Qty = 50 WHERE Qty = 40;

DELETE FROM Product WHERE Id = 1;

SELECT * FROM Product
SELECT * FROM Customer