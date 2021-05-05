const express = require('express');
const oracledb = require('oracledb');

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
      console.log("Result"+result);
      return res.send(result.rows);
    }
  }
}
async function selectAllPatients(req, res) {
  try {
    connection = await oracledb.getConnection({
      user: 'AYBERK',
      password: '123',
      connectString: 'localhost:1521/xe',
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM HASTAYATIS`);
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
async function selectUnitWithKod(req, res) {
  try {
    connection = await oracledb.getConnection({
      user: 'AYBERK',
      password: '123',
      connectString: 'localhost:1521/xe',
    });

    const kod=req.params;
    console.log('Connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM SERVIS WHERE SERVİSKOD=:kod`,kod);
  } catch (err) {
    //send error message
    return res.send(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log('Close connection success');
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
async function getPatientsWithServiceId(req, res) {
  try {
    connection = await oracledb.getConnection({
      user: 'AYBERK',
      password: '123',
      connectString: 'localhost:1521/xe',
    });

    const serviceId=req.params;
    console.log(req.params);
    console.log('Connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM HASTAYATIS WHERE SERVİSID=:serviceId`,serviceId);
  } catch (err) {
    //send error message
    return res.send(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log('Close connection success');
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
app.get('/patients', (req, res) => {
  selectAllPatients(req,res);
});
app.get('/units/:kod',(req,res) =>{
  selectUnitWithKod(req,res);
});
app.get('/patients/serviceId/:serviceId/',(req,res)=>{
  getPatientsWithServiceId(req,res);
});
// app.get('/patients/:serviceId/:hastaId',(req,res)=>{
//   getPatientDetailWithServiceId(req,res);
// });

app.listen(port, () => {
  console.log(`Listening http://192.168.1.35:${port}`);
});