//Connects mySql and function of queries
const mysql = require('mysql2');
//Connects to Connection.js
const db = require('./db/connection');
//Links inquirer
const inquirer = require('inquirer');


//Links to express package
const express = require('express');
//Will instantitate the server
const app = express();


//Directory Prompt
const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'directory',
            message: 'What would you like to do?',
            choices: [
            'View all departments', 
            'View all roles', 
            'View all employees', 
            'Add a department', 
            'Add a role', 
            'Add an employee', 
            'Add an employee role']
        }

    ]);
};

//Add Departmnet Prompt
const inputDpt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'inputDpt',
            message: 'What is the name of the department?',
            validate: inputDpt => {
                if (inputDpt) {
                    return true;
                } else {
                    console.log('Please enter the title of the department.')
                    return false;
                }
            }
        }
    ]);
};

//Function to add department
const addDepartment = async() => {
    const result = await inquirer.prompt(inputDpt)
    const sql = `INSERT INTO department (name)
    VALUES (?)`;
    const params = [result.name];

    db.query(sql, params, function(err, results) {
        console.log("");
        console.table(results);
    });
    //Added at end of each function to redirect user to the main directory
    startDirectory();
}

// Add Role Prompt
const inputRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'inputRoleName',
            message: 'What is title of the role?',
            validate: inputRoleName => {
                if (inputRoleName) {
                    return true;
                } else {
                    console.log('Please enter title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'inputRoleSalary',
            message: 'What is the annual salary?',
            validate: inputRoleSalary => {
                if (inputRoleSalary) {
                    return true;
                } else {
                    console.log('Please enter salary.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'inputRoleDpt',
            message: 'Whats the department number?',
            validate: inputRoleDpt => {
                if (inputRoleDpt) {
                    return true;
                } else {
                    console.log('Please enter the departmnet number.');
                    return false;
                }
            }
        }
    ]);
};

//Function to add role
const addRole = async() => {
    const result = await inquirer.prompt(inputRole)
    const sql = `INSERT INTO role (title, salary, department_id)
    VALUES (?,?,?)`;
    const params = [result.title, result.salary, result.department];

    db.query(sql, params, function(err, results) {
        console.log("");
        console.table(results);
    });

    startDirectory();
}


//Add Employee Prompt
const inputEmp = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the employees first name?',
            validate: firstName => {
                if (firstName) {
                    return true;
                } else {
                    console.log('Please enter their first name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the employees last name?',
            validate: lastName => {
                if (lastName) {
                    return true;
                } else {
                    console.log('Please enter their last name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empRole',
            message: 'What is the employees role?',
            validate: empRole => {
                if (empRole) {
                    return true;
                } else {
                    console.log('Please enter their role.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empMngr',
            message: 'Who is their manager(insert employee id for manager instead of name?',
            validate: empMngr => {
                if (empMngr) {
                    return true;
                } else {
                    console.log('Please enter the number found first on the left hand side of an employee.');
                    return false;
                }
            }
        }
    ]);
};

//Funcion to add Employee
const addEmp = async() => {
    const result = await inquirer.prompt(inputEmp)
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [result.first_name, result.last_name, result.role_id, result.manager_id];

    db.query(sql, params, function (err, results) {
        console.log("");
        console.table(results);
    });

    startDirectory();
}

//Update Employee Prompts:Selects employee
const selEmp = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'selectEmp',
            message: 'Select the employee.',
            choice: ''
        },
    ])
};

//Updates role
const updateEmpRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'updatedRole',
            message: 'What is their new role?',
            validate: updatedRole => {
                if (updatedRole) {
                    return true;
                } else {
                    console.log('Please enter their new role.');
                    return false;
                }
            }
        }
    ]);
};

//Functions to update employee
//Selects employee
const selectEmp = async () => {
    const result = await inquirer.prompt(selEmp);
    db.query('SELECT role.id, role.title FROM role', function (err, results) {
        console.log("");
        console.log.table(results);
    });
    updateEmp(result.employee_id);
}

//Adds fields to the employee
const updateEmp = async () => {
    const result = await inquirer.prompt(updateEmpRole)
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [result.first_name, result.last_name, result.role_id, result.manager_id];

    db.query(sql, params, function (err, results) {
        console.log("");
        console.table(results);
    });
    startDirectory();
}

//Will go to main menu after comppleting selection
var startDirectory = function() {
    switch(result.promptUser) {
        
        case "view all departments":
            db.query('SELECT * FROM department', function(err, results) {
                console.log("");
                console.table(results);
            });
            startDirectory();
            break;
        case "view all roles":
            db.query('SELECT * FROM role', function(err, results) {
                console.log("");
                console.table(results);
            });
            startDirectory();
            break;
        case "view all employees":
            db.query('SELECT * FROM employee', function(err, results) {
                console.log("");
                console.table(results);
            });
            startDirectory();
            break;
        case "add a department":
            addDepartment();
            break;
        case "add a role":
            addRole();
            break;
        case "add employee":
            addEmp();
            break;
        case "update an employee":
            updateEmp();
            break;

    }
};


promptUser().then(answers => console.log(answers));


