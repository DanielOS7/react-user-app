var express = require("express");
var app = express();
var cookieparser = require("cookie-parser");
var mySql = require('./dbConnection');
var con = mySql();
var bodyparser = require("body-parser");
var session = require("express-session");

app.use(session({}));
app.use(cookieparser());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded(({ extended: true })));

app.get("/", function (request, response) {
  
  var sqlquery = `select * from users`;

  con.query(sqlquery, function (error, data) {
    if (error) {
        console.log("Error executing query");
    }
    else {
      console.log("Data retrieved");
      response.send(data);
    
    }
    
    

});
  
});

app.listen(2700);



