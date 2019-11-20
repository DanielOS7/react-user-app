var express = require("express");
var app = express();
var cookieparser = require("cookie-parser");
var mySql = require('./dbConnection');
var con = mySql();
var bodyparser = require("body-parser");
var session = require("express-session");
var cors = require('cors');

app.use(session({ secret: "shh, secret!" }));
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
      console.log("User data retrieved");
      response.send(data);

    }

  });

});


app.post("/addUser", function (request, response) {
  console.log("Something");

  console.log(request.body)
  var username = request.body.username;
  var password = request.body.password;
  var name = request.body.name;
  var role = request.body.role;

  var sqlquery = `insert into users values('${username}', '${password}', '${name}', ${role == 'admin' ? 1 : 2})`;
  console.log(sqlquery);
  con.query(sqlquery, function (error, data) {
    if (error) {
      console.log('Error adding a new user');
    }
    else {
      console.log('New user added');
    }
  });
  response.end();
});



app.listen(2700);



