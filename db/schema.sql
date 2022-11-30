drop database if exists employeeTracker_db;
create database employeeTracker_db;

use employeeTracker_db;

create table departments(
id int auto_increment primary key,
name varchar(30) unique not null
);

create table role(
id int auto_increment primary key,
title varchar(30) unique not null,
salary decimal(10,2),
department_id int,
foreign key (department_id) references departments(id)
);

create table employee(
id int auto_increment primary key,
first_name varchar(30) unique not null,
last_name varchar(30) unique not null,
role_id int,
manager_id int null,
foreign key (role_id) references role(id),
foreign key (manager_id) references employee(id)
);
