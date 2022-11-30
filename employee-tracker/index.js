const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "employeeTracker_db",
    password: "athletics12",
    user: "root"
})


connection.connect(err => {
    if (err) throw err
    else {
        init()
    }
})

function init(){
    inquirer.prompt([
       {
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
       }

    ])
    .then(data => {
        if (data.start === 'view all departments') {
            console.log("displaying departments")
            connection.query(`select * from departments`, (err, results) => {
                console.table(results)
                init()
            })
        }
        else if (data.start === 'view all employees') {
            console.log("displaying employees")
            connection.query(`select * from employee`, (err, results) => {
                console.table(results)
                init()
            })
        } 
        else if (data.start === 'view all roles') {
            console.log("displaying roles")
            connection.query(`select * from role`, (err, results) => {
                console.table(results)
                init()
            })
        }
        else if (data.start === 'add a department') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'department',
                    message: 'what is the name of the department you want to add?'
                }
            ])
            .then(department => {

            connection.query(`insert into departments (name) values('${department.department}')`, (err, results) => {
                console.table(results)
                init()
            })
        })
        }
        else if (data.start === 'add a role') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'role',
                    message: 'what role do you want to add?',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'what is the salary?',
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: 'what is the id of the department this role belongs to?',
                }
            ])
            .then(role => {

            connection.query(`insert into role (title, salary, department_id) values('${role.role}', ${role.salary}, ${role.department_id});`, (err, results) => {
                if(err) console.log(err)
                console.table(results)
                init()
            })
        })
        }
        else if (data.start === 'add an employee') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'employee',
                    message: 'add a new employee'
                }
            ])
            .then(employee => {

            connection.query(`insert into employee (name) values('${employee}')`, (err, results) => {
                console.table(results)
                init()
            })
        })
        }
    })
}
