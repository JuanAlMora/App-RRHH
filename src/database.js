const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Testguy',
    password: '123',
    database: 'rrhh_db'
  });

  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to the database:', error);
    } else {
      console.log('Connected to the database!');
    }
  });
    
module.exports = connection;
