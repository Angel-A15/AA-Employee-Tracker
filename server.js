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

//View all Roles Prompt
const viewAllRoles = () => {
    return inquirer.prompt([

    ]);
;}

//View all Employees Prompt
const viewAllEmps = () => {
    return inquirer.prompt([

    ]);
;}

//View all Departments Prompt
const viewAllDpts = () => {
    return inquirer.prompt([
        //departments are displayed
    ]);
;}

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
    })
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
    })
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
}

//Update Employee Prompt
const updateEmpRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'selectEmp',
            message: 'Select the employee.',
            choice: ''
        },
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
        },
        {
            type: 'input',
            name: 'updatedNum',
            message: 'What the department number?',
            validate: updatedNum => {
                if (updatedNum) {
                    return true;
                } else {
                    console.log('Please enter their department number.');
                    return false;
                }
            }
        }
    ]);
};

//Function to update employee
const updateEmp = async () => {
    const result = await inquirer.prompt(updateEmpRole)
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [result.first_name, result.last_name, result.role_id, result.manager_id];

    db.query(sql, params, function (err, results) {
        console.log("");
        console.table(results);
    });
}


promptUser().then(answers => console.log(answers));


