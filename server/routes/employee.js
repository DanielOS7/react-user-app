// var express = require('express');
// var router = express.Router();
// var mySql = require('../dbconnection');
// var con = mySql();

// router.get('/', function(request, response, next) {
   
//   var sqlquery = `select * from employee`;

//   con.query(sqlquery, function (error, data) {
//     if (error) {
//       console.log("Error executing query");
//     }
//     else {
//       console.log("User data retrieved");
//       response.send(data);

//     }

//   });

//   });

// module.exports = router;