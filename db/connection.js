//Connects MySQL to database
const mysql = require('mysql2');

//Connect to database with your MySQL credentials
const db = mysql.createConnection (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        //Your MySQL Username
        user: '',
        //Your Password
        password: '',
        database: 'employee_tracker'
    },
    console.log('Connected to the election database.')
);

module.exports = db;