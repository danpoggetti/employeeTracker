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
