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

//Port for server to run in
const PORT = process.env.PORT || 3001;

//Express Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json())

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

promptUser().then(answers => console.log(answers));


//Get route to test function; current status: MODULE_NOT_FOUND
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

//Function will start Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});