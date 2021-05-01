
let connection;
var oracledb = require('oracledb');

(async function () {
  try {
    connection = await oracledb.getConnection({
      user: "AYBERK",
      password: "123",
      connectString: "localhost:1521/xe",
    });
    let result =await connection.execute("SELECT * FROM SERVIS")
    console.log(result.rows);
    console.log("Successfully connected to Oracle!");
  } catch (err) {
    console.log("Error: ", err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.log("Error when closing the database connection: ", err);
      }
    }
  }
})();