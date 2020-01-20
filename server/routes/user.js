const express = require('express');
const router = express.Router();
const mySql = require('../dbconnection');
const con = mySql();



router.get('/', (request, response) => {

  const sqlquery = `select * from test_users`;
  
    con.query(sqlquery, (error, data) => {
      if (error) {
        console.log('Error executing query');
      }
      else {
        console.log('User data retrieved');
        response.send(data);
  
      }
  
    });
  
  });
  
  
  router.post('/', (request, response) => {
  
    console.log(request.body)
    const username = request.body.username;
    const password = request.body.password;
    const name = request.body.name;
    const role = request.body.role;
  
    const sqlquery = `insert into test_users values('${username}', '${password}', '${name}', ${role == 'Admin' ? 1 : 2})`;
    console.log(sqlquery);
    con.query(sqlquery, (error, data) => {
      if (error) {
        console.log('Error adding a new user');
      }
      else {
        console.log('Added new user');
      }
    });
    response.end();
  });

  
  // Not tested in postman as this was not a requirment for this project
  router.put('/', (request, response) => {
  
    console.log(request.body)
    const username = request.body.username;
    const password = request.body.password;
    const name = request.body.name;
    const role = request.body.role;
  
    const sqlquery = `UPDATE test_users SET username = ${username},
     password = ${password}, name = ${name}, role = ${role == 'admin' ? 1 : 2}  WHERE username =  ${username}  `;
    console.log(sqlquery);
    con.query(sqlquery, (error, data) => {
      if (error) {
        console.log('Error adding a new user');
      }
      else {
        console.log('Updated user');
      }
    });
    response.end();
  });

  module.exports = router;
  