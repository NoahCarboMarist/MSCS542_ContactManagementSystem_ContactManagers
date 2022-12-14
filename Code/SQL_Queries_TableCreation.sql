drop database myCms;
CREATE DATABASE IF NOT EXISTS myCms;
USE myCms;

-- Creates Supervisor Table
CREATE TABLE Supervisor (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  UserID INT,
  DepartmentID INT
  );

-- Creates Department Table
CREATE TABLE Department (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  DName VARCHAR(45),
  Supervisor_ID INT NOT NULL,
  FOREIGN KEY (Supervisor_ID) REFERENCES Supervisor (ID)
   );

-- Creates Employees Table
 CREATE TABLE Employees (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Fname VARCHAR(45),
  Lname VARCHAR(45),
  email VARCHAR(45),
  phoneNum VARCHAR(12),
  WorkNum VARCHAR(12),
  gender CHAR(1),
  age INT,
  Department_ID INT NOT NULL,
  Supervisor_ID INT NOT NULL,
 FOREIGN KEY (Department_ID) REFERENCES Department (ID),
 FOREIGN KEY (Supervisor_ID) REFERENCES Supervisor (ID)
 );

-- Creates User Table
CREATE TABLE users (
  userlogin INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userpassword VARCHAR(45) ,
  useremail VARCHAR(45) ,
  usertype VARCHAR(45) ,
  loginkey VARCHAR(45) ,
  Employees_ID INT NOT NULL,
    FOREIGN KEY (Employees_ID) REFERENCES Employees (ID)
    );

-- Creates Relationship Table
CREATE TABLE  Relationship (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user1ID INT ,
  user2ID INT ,
  Rstatus VARCHAR(45) ,
  Rdate DATE
  );

-- Creates GroupMembers Table
  CREATE TABLE GroupMembers (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  GroupID INT ,
  UserID INT ,
  JoinDate DATE
  );

-- Creates GroupDetails Table
  CREATE TABLE GroupDetails (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  LeaderID INT ,
  GroupName VARCHAR(45) ,
  CreatedDate DATE ,
  GroupMembers_ID INT NOT NULL,
   FOREIGN KEY (GroupMembers_ID) REFERENCES GroupMembers (ID),
   FOREIGN KEY (LeaderID) REFERENCES Employees (ID)
   );

-- Creates Messages Table
CREATE TABLE Messages (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  senderID INT ,
  userID INT ,
  groupID INT ,
  Message longtext,
  Messagedate DATE,
  FOREIGN KEY (senderID) REFERENCES Employees (ID),
   FOREIGN KEY (userID) REFERENCES Employees (ID)
 );

-- Creates EmailHistory Table
 CREATE TABLE EmailHistory (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  SenderID INT ,
  Message LONGTEXT ,
  ReceiverID INT ,
  EmailDate DATE
  );

-- Creates Certified Table
CREATE TABLE Certified (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  UserID INT ,
  CertificationID INT ,
  CertDate DATE ,
  Employees_ID INT NOT NULL,
 FOREIGN KEY (Employees_ID) REFERENCES Employees (ID)
    );

-- Creates Certification Table
  CREATE TABLE Certification (
  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  Name VARCHAR(45) ,
  Type VARCHAR(45) ,
  Certified_ID INT ,
  FOREIGN KEY (Certified_ID) REFERENCES Certified(ID)
   );

-- Creates Employees_has_Relationship Table
  CREATE TABLE Employees_has_Relationship (
  Employees_ID INT NOT NULL  ,
  Relationship_ID INT NOT NULL  ,
  PRIMARY KEY (Employees_ID, Relationship_ID),
    FOREIGN KEY (Employees_ID) REFERENCES Employees (ID),
    FOREIGN KEY (Relationship_ID) REFERENCES Relationship(ID)
   );

-- Creates Employees_has_Messages Table
   CREATE TABLE Employees_has_Messages (
  Employees_ID INT NOT NULL,
  Messages_ID INT NOT NULL,
  PRIMARY KEY (Employees_ID, Messages_ID),
   FOREIGN KEY (Employees_ID) REFERENCES Employees (ID),
    FOREIGN KEY (Messages_ID) REFERENCES Messages (ID)
    );

-- Creates Employees_has_Groups Table
  CREATE TABLE Employees_has_Groups (
  Employees_ID INT NOT NULL,
  Groups_ID INT NOT NULL,
  PRIMARY KEY (Employees_ID, Groups_ID),
   FOREIGN KEY (Employees_ID) REFERENCES Employees(ID),
    FOREIGN KEY (Groups_ID) REFERENCES GroupDetails(ID)
    );

-- Creates Employees_has_Email_History Table
  CREATE TABLE Employees_has_Email_History (
  Employees_ID INT NOT NULL,
  Email_History_ID INT NOT NULL,
  PRIMARY KEY (Employees_ID, Email_History_ID),
    FOREIGN KEY (Employees_ID) REFERENCES Employees(ID),
    FOREIGN KEY (Email_History_ID) REFERENCES EmailHistory (ID)
    );

  -- Creates Messages_has_Groups Table
  CREATE TABLE Messages_has_Groups (
  Messages_ID INT NOT NULL,
  Groups_ID INT NOT NULL,
  PRIMARY KEY (Messages_ID, Groups_ID),
   FOREIGN KEY (Messages_ID) REFERENCES Messages (ID),
    FOREIGN KEY (Groups_ID) REFERENCES GroupDetails (ID)
   );
   SET FOREIGN_KEY_CHECKS=0;
-- Loads data in Employee
 Insert into Employees(FName,LName,email,phonenum,worknum,gender,age,department_ID,Supervisor_ID)values
	('Ariana',	 'Grande',		       'agran@cms.com',0000000000,0000000001,'F',30,1,1),
  ('Dwayne',	 'TheRockJohnson',     'dther@cms.com',0000000002,0000000003,'M',50,2,1),
  ('Barak',     'Obama',		       'bobam@cms.com',0000000004,0000000005,'M',56,3,1),
  ('Abraham',   'Lincoln',		       'alinc@cms.com',0000000006,0000000007,'M',200,4,1),
  ('Michael',   'Jackson',		   	   'mjack@cms.com',0000000008,0000000009,'M',43,1,1),
  ('Magic',     'Johnson',		       'mjohn@cms.com',0000000010,0000000011,'M',54,1,2),
  ('Jennifer',  'Lawrence',	       'jlawr@cms.com',0000000012,0000000013,'F',36,7,3),
  ('Taylor',    'Swift',		       'tswif@cms.com',0000000014,0000000015,'F',27,8,4),
  ('King',      'George III',		   'kgeor@cms.com',0000000016,0000000017,'M',300,9,1),
  ('Queen',     'Elizabeth',		   'qeliz@cms.com',0000000018,0000000019,'F',96,2,1),
  ('Megan',     'Markel',		   	   'mmark@cms.com',0000000020,0000000021,'F',29,6,2),
  ('Derek',     'Jeter',		       'djete@cms.com',0000000022,0000000023,'M',42,5,4),
  ('Will',      'Smith',		 	   'wsmit@cms.com',0000000024,0000000025,'M',55,4,4),
  ('Meryl',     'Streep',		       'mstre@cms.com',0000000026,0000000027,'F',64,3,3),
  ('Lizzo',      Null,		 	       'lizzo@cms.com',0000000028,0000000029,'F',28,10,3);

-- Loads data in Users
-- Passwords: mpyuz = admin , qybxakqq = employee
Insert into users(userlogin,userpassword,useremail,usertype,loginkey,employees_ID)values
	(100,'mpyuz','agran@cms.com','admin','12345',1),
  (101,'mpyuz1','dther@cms.com','admin','13345',2),
  (102,'mpyuz2','bobam@cms.com','admin','14345',3),
  (103,'mpyuz3','alinc@cms.com','admin','15345',4),
  (104,'qybxakqq0','mjack@cms.com','employee','16345',5),
  (105,'qybxakqq1','mjohn@cms.com','employee','17345',6),
  (106,'qybxakqq2','jlawr@cms.com','employee','18345',7),
  (107,'qybxakqq3','tswif@cms.com','employee','19345',8),
  (108,'qybxakqq4','kgeor@cms.com','employee','20345',9),
  (109,'qybxakqq5','qeliz@cms.com','employee','21345',10),
  (110,'qybxakqq6','mmark@cms.com','employee','22345',11),
  (111,'qybxakqq7','djete@cms.com','employee','23345',12),
  (112,'qybxakqq8','wsmit@cms.com','employee','24345',13),
  (113,'qybxakqq9','mstre@cms.com','employee','25345',14),
  (114,'qybxakqq10','lizzo@cms.com','employee','26345',15);

-- Loads data in Certification
Insert into Certification(name,type,certified_ID)values
	('Customer Service','Admin',null),
  ('Networking','IT',null),
  ('Internal Transfers','HR',null),
  ('Organizational Excellance','Employee Retention',null),
  ('Math','Accounting',null),
  ('New Hire Screening','Employee Transfers',null),
  ('Lab Equipment','Research',null),
  ('Word','Office365',null),
  ('Executive Assistance','Admin',null),
  ('Attendance','Admin',null);

-- Loads data into Certified
Insert into Certified(userID,certificationID, certdate,employees_ID)values
	(1,1,'2022-05-20',1),
  (1,2,'2022-05-20',1),
  (1,3,'2022-05-20',1),
  (1,4,'2022-05-20',1),
  (2,5,'2022-05-20',1),
  (2,6,'2022-05-20',1),
  (3,7,'2022-05-20',1),
  (3,8,'2022-05-20',1),
  (4,9,'2022-05-20',1),
  (4,10,'2022-05-20',1);

-- Loads data in Department
Insert into Department(DName, Supervisor_ID)values
	('Administration', 1),
  ('Human Resources', 1),
  ('Information Technology', 2),
  ('Quality Control',3),
  ('Marketing',3),
  ('Telecommunications',2),
  ('Programming', 2),
  ('Customer Service',3),
  ('General Services',4),
  ('Maintenance',4);

-- Loads data in Supervisor
Insert into Supervisor(UserID, DepartmentID) values
	(1,1),
  (2,3),
  (3,4),
  (4,9);

-- Loads data into Messages
Insert into Messages(senderID,userID,groupID,message,messagedate)values
	(1,2,1,'We are going to play a company game of telephone pass along my message the next day "Pancakes"','2022-5-20'),
  (2,3,1,'Passing along the CEOs message "Pancakes"','2022-5-21'),
  (3,4,1,'Passing along the CEOs message "Pancakes"','2022-5-22'),
  (4,5,1,'Passing along the CEOs message "Pancakes"','2022-5-23'),
  (5,6,1,'Passing along the CEOs message "Paincakes"','2022-5-24'),
  (6,7,1,'Passing along the CEOs message "Paincakes"','2022-5-25'),
  (7,8,1,'Passing along the CEOs message "Paincakes"','2022-5-26'),
  (8,9,1,'Passing along the CEOs message "coffeecakes"','2022-5-27'),
  (9,10,1,'Passing along the CEOs message "coffeecakes"','2022-5-28'),
  (10,11,1,'Passing along the CEOs message "coffeecorn"','2022-5-29'),
  (11,12,1,'Passing along the CEOs message "cornkernals"','2022-5-30'),
  (12,13,1,'Passing along the CEOs message "cornkernals"','2022-5-31'),
  (13,14,1,'Passing along the CEOs message "cornmeal"','2022-6-01'),
  (14,15,1,'Passing along the CEOs message "cornmeal"','2022-6-02'),
  (15,1,1,'Your message to the company said cornbread','2022-6-03'),
  (1,2,1,'That is not the word I gave you and as such you are now terminated at this company','2022-6-04'),
  (2,3,1,'They were basically the same thing :(','2022-6-05');

-- Loads data into GroupsDetails
Insert into GroupDetails(leaderID,groupname,createddate,groupmembers_ID)values
	(1,'I fired The Rock','2022-5-20',1),
  (2,'Im fired','2022-6-10',2),
  (3,'Wow','2022-5-20',2),
  (3,'Team Meetings','2022-5-25',3),
  (4,'Employee Retention','2022-5-16',5),
  (3,'TGIF','2022-5-30',2),
  (6,'Hello World','2022-5-21',4),
  (4,'CMS542','2022-5-15',2),
  (11,'Project Assignment','2022-5-28',1),
  (6,'Project Report Phase 4','2022-6-21',1);

-- Loads data into GroupMembers
Insert into GroupMembers(groupid,userid,joindate)values
	(1,1,'2022-05-20'),
  (1,2,'2022-05-20'),
  (1,3,'2022-05-20'),
  (1,4,'2022-05-20'),
  (1,5,'2022-05-20'),
  (2,9,'2022-05-22'),
  (2,10,'2022-05-22'),
  (2,8,'2022-05-22'),
  (3,12,'2022-05-24'),
  (3,11,'2022-05-24'),
  (4,4,'2022-05-26'),
  (4,15,'2022-05-26'),
  (5,7,'2022-05-28'),
  (5,6,'2022-05-28');

-- Loads data into Email History
Insert into EmailHistory(SenderID,Message,ReceiverID,EmailDate)values
	(1,'I will give you one last chance pass along my message "telephone"',2,'2022-06-04'),
  (2,'Passing along the CEOs message "telephone"',3,'2022-06-05'),
  (3,'Passing along the CEOs message "telephone"',4,'2022-06-06'),
  (4,'Passing along the CEOs message "telephone"',5,'2022-06-07'),
  (5,'Passing along the CEOs message "telephone"',6,'2022-06-08'),
  (6,'Passing along the CEOs message "telephone"',7,'2022-06-09'),
  (7,'Passing along the CEOs message "telephone"',8,'2022-06-10'),
  (8,'Passing along the CEOs message "telephone"',9,'2022-06-11'),
  (9,'Your message was "telephone"',1,'2022-06-12'),
  (1,'Congrats it looks like you will no longer be terminated',2,'2022-06-13');
SET FOREIGN_KEY_CHECKS = 0;

select * from Employees;
select * from users;
select * from Department;
select * from Supervisor;
select * from Messages;
select * from GroupDetails;
select * from GroupMembers;
select * from EmailHistory;
