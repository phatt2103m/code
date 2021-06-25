IF EXISTS (SELECT * FROM sys.databases WHERE Name = 'Example5')

DROP DATABASE Example5

GO
CREATE DATABASE Example5
GO
USE Example5
GO
CREATE TABLE LopHoc(
	MaLopHoc INT PRIMARY KEY IDENTITY,
	TenLopHoc varchar(10)
)

CREATE TABLE SinhVien(
	MaSV int PRIMARY KEY,
	TenSV varchar(40),
	MaLopHoc int,
	CONSTRAINT fk FOREIGN KEY(MaLopHoc) REFERENCES LopHoc(MaLopHoc)
)
CREATE TABlE SanPham(
	MaSP int Not NULL,
	TenSP varchar(40) Null
)
CREATE TABLE StoreProduct(
	ProductID int NOT NULL,
	Name varchar(40) NOT NULL,
	Price money NOT NULL DEFAULT (100)
)
INSERT INTO StoreProduct(ProductID,Name) VALUES(111,'Rivets')
SELECT * FROM StoreProduct
GO
CREATE TABLE ContactPhone(
	Person_ID int IDENTITY(500,1) NOT NULL,
	MobileNumber bigint NOT NULL
)
GO
CREATE TABLE CellarPhone(
	Person_ID uniqueidentifier DEFAULT NEWID() NOT NULL,
	PersonName varchar(60) NOT NULL
)
INSERT INTO CellarPhone(PersonName)VALUES('William Smith')

GO
SELECT * FROM CellarPhone
GO
CREATE TABLE ContactPhonee(
	Person_ID int PRIMARY KEY,
	MobileNumber bigint UNIQUE,
	ServiceProvider varchar(30),
	LandlineNumber bigint UNIQUE
)
INSERT INTO ContactPhonee Values(101,249823,'Hutch',Null)
INSERT INTO ContactPhonee Values(102,242523,'Alex',Null)
SELECT * FROM ContactPhonee
GO
CREATE TABLE PhoneExpenxses(
	Expense_ID int PRIMARY KEY,
	MobileNumber bigint FOREIGN KEY REFERENCES ContactPhonee(MobileNumber),
	Amount bigint CHECK(Amount > 0)
)
GO
ALTER TABLE ContactPhone ALTER COLUMN ServiceProvider varchar(45)
GO
ALTER TABLE ContactPhone DROP COLUMN ServiceProvider
GO
ALTER TABLE ContactPhone ADD CONSTRAINT CHK_RC CHECK(RentalCharges > 0)
GO
ALTER TABLE Person.ContactPhone DROP CONSTRAINT CHK_RC
