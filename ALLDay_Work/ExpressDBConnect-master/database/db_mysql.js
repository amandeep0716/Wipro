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