//Connects mySql and function of queries
const mysql = require('mysql2');
//Links to express package
const express = require('express');
//Will instantitate the server
const app = express();
//Links inquirer
const inquirer = require('inquirer');
//Port for server to run in
const PORT = process.env.PORT || 3001;
//Express Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//Directory pronpts
const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'directory',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Add an employee role']
        },
        {
            type: 'input',
            name: 'inputDpt',
            message: 'What is the name of the department?'
        },
        {
            type: 'input',
            name: 'inputRole',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'inputEmp',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'updateEmpRole',
            message: 'What is the name of the updated employee role?'
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