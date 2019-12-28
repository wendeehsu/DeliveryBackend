DROP DATABASE IF EXISTS delivery_db;
CREATE DATABASE delivery_db;
USE delivery_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  phone VARCHAR(255),
  address VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  account VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8; 

INSERT INTO users (name,phone,address,password,account) values
("adam",NULL,NULL,"test1234","testacct"),
("vivian","091234",NULL,"vivi1111","vivi");

DROP TABLE IF EXISTS platform_Activities;
CREATE TABLE platform_Activities (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  discount_shippingFee int(11) NOT NULL,
  discountMode int NOT NULL,
  discountParam float,
  description VARCHAR(255),
  pic_url VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8; 