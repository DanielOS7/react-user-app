const express = require('express');
const router = express.Router();
const mySql = require('../dbconnection');
const con = mySql();



router.post('/', (request, response) => {

    const username = request.body.username;
    const password = request.body.password;
    console.log(request.body)
  
    const sqlquery = `select * from test_users where Username='${username}' AND Password='${password}'`;
  
    console.log(sqlquery);
    con.query(sqlquery, (err, data) => {
  
      if (err) {
        console.log(err);
      }
      else {
        if (data.length == 0) {
          const errorData = {
            'username': 'No User Found'
          }
          console.log('Error');
          response.status(205).send(errorData);
        }
  
  
        else {
          console.log('User Found')
         
          request.session.role = data[0].role;
          request.session.username = data[0].username;
          request.session.name = data[0].name;
          console.log(request.session.name + ' test');
          const sessionData = {
            'username': request.session.username,
            'name': request.session.name, 
            'role': request.session.role
          }
          response.status(200).send(JSON.stringify(sessionData));
  
        }
  
      }
  
    });
  });
  
  


  module.exports = router;
  