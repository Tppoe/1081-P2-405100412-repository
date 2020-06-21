const mysql = require("mysql2");

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: '1082_final',
  password: "0000"
});


pool.query("SELECT * FROM `1082-final`.class_demo",function(err,results){
  console.log(JSON.stringify(results));
  console.log("Database 1082_final connected.");});


module.exports = pool.promise();