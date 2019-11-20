var express = require("express");
var app = express();
var cookieparser = require("cookie-parser");
var mySql = require('./dbConnection');
var con = mySql();
var bodyparser = require("body-parser");
var session = require("express-session");
var cors = require('cors');

app.use(session({secret:"shh, secret!"}));
app.use(cookieparser());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded(({ extended: true })));
app.use(cors());

app.get("/getUsers", function (request, response) {
  
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



