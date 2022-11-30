insert into departments(name)
values ('HR'),('Accounting'),('Marketing');

insert into role(title, salary, department_id)
values ('CEO', 150000, 1),
('Accountant', 90000, 2),
('Manager', 70000, 3);

insert into employee(first_name, last_name, role_id, manager_id)
values ('Peter', 'Stark', 1, null),
('Jane', 'Parker', 3, null),
('John', 'Smith', 2, 2);
