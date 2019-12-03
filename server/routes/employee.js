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




    router.get('/', function(request, response) {
   
    var sqlquery = `select * from employee`;
  
    con.query(sqlquery, function (error, data) {
      if (error) {
        console.log('Error executing query');
      }
      else {
        console.log('Employee data retrieved');
        response.send(data);
  
      }
  
    });
  
    });
  
    router.post('/', function (request, response) {
    
      console.log(request.body);
      
      var name = request.body.name;
      var address = request.body.address;
    
      var sqlquery = `insert into employee values(${null},'${name}', '${address}')`;
      console.log(sqlquery);
      con.query(sqlquery, function (error, data) {
        if (error) {
          console.log('Error adding a new Employee');
        }
        else {
          console.log('Added new Employee');
        }
      });
      response.end();
    });
  
  
  
    router.delete('/', function (request, response) {
    
      console.log(request.body)
      var empno = request.body.empno;
    
      var sqlquery = `DELETE FROM employee  WHERE empno =  ${empno}`;
      console.log(sqlquery);
      con.query(sqlquery, function (error, data) {
        if (error) {
          console.log('Error deleting employe');
        }
        else {
          console.log('Deleted employee');
        }
      });
      response.end();
    });
  
  
    router.put('/', function (request, response) {
      
      console.log(request.body)
      
      var empno = request.body.empno;
      var name = request.body.name;
      var address = request.body.address;
    
      var sqlquery = `UPDATE employee SET name = '${name}', address = '${address}'  WHERE empno =  ${empno}`;
  
      console.log(sqlquery);
      con.query(sqlquery, function (error, data) {
        if (error) {
          console.log('Error updating employee');
        }
        else {
          console.log('Updated employee');
        }
      });
      response.end();
    });
  
    
  
  

module.exports = router;