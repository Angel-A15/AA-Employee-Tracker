//Connects mySql and function of queries
const mysql = require('mysql12');
//Links to express package
const express = require('express');
//Will instantitate the server
const app = express();
//Port for server to run in
const PORT = process.env.PORT || 3001;
//Express Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json())







app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});



//Function will start Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});