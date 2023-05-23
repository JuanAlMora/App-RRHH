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

  connection.query('SELECT * FROM administrador', (error, results) => {
    if (error) {
        console.error('Error executing the query:', error);
      } else {
        console.log('Query results:', results);
      }
    });

    const data = {
        id: '2',
        contraseña: '332'
      };
      
      const query = 'INSERT INTO administrador SET ?';
      
      connection.query(query, data, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        
        console.log('Data inserted successfully!');
      });

        connection.end();
  