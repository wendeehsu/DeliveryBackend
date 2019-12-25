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
