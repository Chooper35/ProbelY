const express = require('express');
const oracledb = require('oracledb');

const users = [
  {id: 1, ad: 'Ayberk', soyad: 'Düzova'},
  {id: 2, ad: 'Berkan', soyad: 'Düzova'},
];
const app = express();
const port = 3000;

app.use(express.json());

async function selectAllUnits(req, res) {
  try {
    connection = await oracledb.getConnection({
      user: 'AYBERK',
      password: '123',
      connectString: 'localhost:1521/xe',
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM SERVIS`);
  } catch (err) {
    //send error message
    return res.send(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
    if (result.rows.length == 0) {
      //query return zero employees
      return res.send('Query send nothing.');
    } else {
      //send all employees
      return res.send(result.rows);
    }
  }
}

app.get('/units', (req, res) => {
  selectAllUnits(req, res);
});

app.listen(port, () => {
  console.log(`Listening http://192.168.1.35:${port}`);
});
