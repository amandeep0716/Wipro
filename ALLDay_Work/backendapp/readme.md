# MySQL + Express

- install mysql driver in the application 
   - npm install mysql2
- install express
   - npm install express
- create the commection 
    const mysql = require('mysql2');
    const connection = mysql.createConnection({
        host: 'localhost',// ip address of the mysql server
        user: 'root',// username to connect to the mysql server
        password: 'root',// password to connect to the mysql server
        database: 'expense'// name of the database to connect to
    });

    connection.connect((err) => {
        if (err) 
            console.error('Error connecting to the database:', err);
         else
            console.log('Connected to the database!');
        return;
    });

module.exports = connection;

- add query in router
    const express = require('express');
    const router = express.Router();
    const db = require('../db');
        router.get('/', (req, res) => {
            db.query('SELECT * FROM users', (err, results) => {
            if(err) {
                res.status(500).json({ error: 'Database query failed' });
            }
            else {
                res.json(results);
            }
        })
    });
module.exports = router;

- call the route in the app.js