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



router.post('/', function (request, response) {

    var username = request.body.username;
    var password = request.body.password;
    console.log(request.body)
  
    var sqlquery = `select * from users where Username='${username}' AND Password='${password}'`;
  
    console.log(sqlquery);
    con.query(sqlquery, function (err, data) {
  
      if (err) {
        console.log(err);
      }
      else {
        if (data.length == 0) {
          var errorData = {
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
          var sessionData = {
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
  