var express = require('express');
var app = express();
var router = express.Router();
var mySql = require('../dbconnection');
var con = mySql();
var bodyparser = require("body-parser");
var cors = require('cors');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded(({ extended: true })));
app.use(cors());


router.get('/', function (request, response) {

    var sqlquery = `select * from users`;
  
    con.query(sqlquery, function (error, data) {
      if (error) {
        console.log('Error executing query');
      }
      else {
        console.log('User data retrieved');
        response.send(data);
  
      }
  
    });
  
  });
  
  
  router.post('/', function (request, response) {
  
    console.log(request.body)
    var username = request.body.username;
    var password = request.body.password;
    var name = request.body.name;
    var role = request.body.role;
  
    var sqlquery = `insert into users values('${username}', '${password}', '${name}', ${role == 'Admin' ? 1 : 2})`;
    console.log(sqlquery);
    con.query(sqlquery, function (error, data) {
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
  router.put('/', function (request, response) {
  
    console.log(request.body)
    var username = request.body.username;
    var password = request.body.password;
    var name = request.body.name;
    var role = request.body.role;
  
    var sqlquery = `UPDATE users SET username = ${username},
     password = ${password}, name = ${name}, role = ${role == 'admin' ? 1 : 2}  WHERE username =  ${username}  `;
    console.log(sqlquery);
    con.query(sqlquery, function (error, data) {
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
  