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

app.put("/updateUser", function (request, response) {
  console.log("Something");

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


app.post("/login", function (req, res) {

  var username = req.body.username;
  var password = req.body.password;
  console.log(req.body)

  var sqlquery = `select * from users where Username='${username}' AND Password='${password}'`;

  console.log(sqlquery);
  con.query(sqlquery, function (err, data) {

    if (err) {
      console.log(err);
    }
    else {
      if (data.length == 0) {
        console.log('Heyyyyy');;
      }
      else {
        console.log('User Found')

      }

    }

  });
});






app.listen(2700);



