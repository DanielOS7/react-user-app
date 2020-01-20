const express = require('express');
const router = express.Router();
const mySql = require('../dbconnection');
const con = mySql();




    router.get('/', (request, response) => {
   
    const sqlquery = `select * from test_employee`;
  
    con.query(sqlquery, (error, data) => {
      if (error) {
        console.log('Error executing query');
      }
      else {
        console.log('Employee data retrieved');
        response.send(data);
  
      }
  
    });
  
    });
  
    router.post('/', (request, response) => {
    
      console.log(request.body);
      
      const name = request.body.name;
      const address = request.body.address;
    
      const sqlquery = `insert into test_employee values(${null},'${name}', '${address}')`;
      console.log(sqlquery);
      con.query(sqlquery, (error, data) => {
        if (error) {
          console.log('Error adding a new Employee');
        }
        else {
          console.log('Added new Employee');
        }
      });
      response.end();
    });
  
  
  
    router.delete('/', (request, response) => {
    
      console.log(request.body)
      const empno = request.body.empno;
    
      const sqlquery = `DELETE FROM test_employee  WHERE empno =  ${empno}`;
      console.log(sqlquery);
      con.query(sqlquery, (error, data) => {
        if (error) {
          console.log('Error deleting employe');
        }
        else {
          console.log('Deleted test_employee');
        }
      });
      response.end();
    });
  
  
    router.put('/', (request, response) => {
      
      console.log(request.body)
      
      const empno = request.body.empno;
      const name = request.body.name;
      const address = request.body.address;
    
      const sqlquery = `UPDATE test_employee SET name = '${name}', address = '${address}'  WHERE empno =  ${empno}`;
  
      console.log(sqlquery);
      con.query(sqlquery, (error, data) => {
        if (error) {
          console.log('Error updating test_employee');
        }
        else {
          console.log('Updated test_employee');
        }
      });
      response.end();
    });
  
    
  
  

module.exports = router;