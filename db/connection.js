//Connects MySQL to database
const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection (
    
    {
        host: 'localhost',
        //Your MySQL Username
        user: '',
        //Your Password
        password: '',
        database: 'department'
    },
    console.log('Connected to the election database.')
);

module.exports = db;