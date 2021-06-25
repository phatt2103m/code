
CREATE DATABASE BookLibrary

GO

USE BookLibrary

CREATE TABLE Book(
	BookCode int ,
	BookTitle varchar(100) NOT NULL,
	Author varchar(50) NOT NULL,
	Edition int,
	BookPrice money,
	Copies int,
	CONSTRAINT pk_Book PRIMARY KEY (BookCode)
)

CREATE TABLE Member(
	MemberCode int  ,
	Name varchar(50) NOT NULL,
	Address varchar(100) NOT NULL,
	PhoneNumber int,
	CONSTRAINT pk_Member PRIMARY KEY (MemberCode)
)
CREATE TABLE IssueDetails(
	BookCode int  ,
	MemberCode int,
	IssueDate datetime,
	ReturnDate datetime
	CONSTRAINT fk_BookCode FOREIGN KEY(BookCode) REFERENCES Book(BookCode)
	PRIMARY KEY(BookCode,MemberCode)
	
)

ALTER TABLE IssueDetails ADD CONSTRAINT fk_MemberCode FOREIGN KEY (MemberCode)REFERENCES Member(MemberCode)

--a
ALTER TABLE IssueDetails DROP CONSTRAINT fk_BookCode
ALTER TABLE IssueDetails DROP CONSTRAINT fk_MemberCode
--b
ALTER TABLE Book DROP CONSTRAINT pk_Book
ALTER TABLE Member DROP CONSTRAINT pk_Member
--c
ALTER TABLE Book ADD CONSTRAINT pk_Book PRIMARY KEY(BookCode)
ALTER TABLE Member ADD CONSTRAINT pk_Member PRIMARY KEY(MemberCode)
--d
ALTER TABLE IssueDetails ADD CONSTRAINT fk_BookCode FOREIGN KEY (BookCode)REFERENCES Book(BookCode)
ALTER TABLE IssueDetails ADD CONSTRAINT fk_MemberCode FOREIGN KEY (MemberCode)REFERENCES Member(MemberCode)
--e
ALTER TABLE Book ADD CONSTRAINT Price_Book CHECK (BookPrice > 0 and BookPrice < 200)
--f
ALTER TABLE Member ADD CONSTRAINT Phone_Number unique (PhoneNumber)
--g
ALTER TABLE IssueDetails MODIFY BookCode int NOT NULL
ALTER TABLE IssueDetails MODIFY MemberCode int NOT NULL

INSERT INTO Book Values(1,'The Tilence of The Lambs','Thomas Harris',10,20,50)
INSERT INTO Book Values(2,'Dao Buoc','Henry David Thoreau',11,50,100)
INSERT INTO Book Values(3,'Nha Gia Kim','Paulo Coelho',5,10,55)
INSERT INTO Book Values(4,'Rung Na Uy','Haruki Murakami',8,40,80)

SELECT * FROM Book

INSERT INTO Member Values(1,'Phat','Phu Luong-DH-TB',01234567)
INSERT INTO Member Values(2,'Phuc','Phu Luong-DH-TB',1412424)
INSERT INTO Member Values(3,'Thanh','Phu Luong-DH-TB',51521414)
INSERT INTO Member Values(4,'Giao','Phu Luong-DH-TB',01512415)
INSERT INTO Member Values(5,'Yasuo','Phu Luong-DH-TB',05267141)

SELECT * FROM Member



SELECT * FROM IssueDetails