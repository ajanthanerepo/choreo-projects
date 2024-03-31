# choreo-projects

# Database creation scripts
CREATE DATABASE IF NOT EXISTS quotes_db;

CREATE TABLE quotes_db.car_quotes (
	quote_id INTEGER AUTO_INCREMENT PRIMARY KEY,
	model  VARCHAR(255) NOT NULL,
	value  VARCHAR(255) NOT NULL,
	rent   VARCHAR(255) NOT NULL
);

CREATE TABLE quotes_db.van_quotes (
	quote_id INTEGER AUTO_INCREMENT PRIMARY KEY,
	model  VARCHAR(255) NOT NULL,
	value  VARCHAR(255) NOT NULL,
	rent   VARCHAR(255) NOT NULL
);