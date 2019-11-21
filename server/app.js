var express = require("express");
var app = express();
var cookieparser = require("cookie-parser");
var mySql = require('./dbConnection');
var con = mySql();
var bodyparser = require("body-parser");
var session = require("express-session");
var cors = require('cors');

// var employee = require('./routes/employee');

app.use(session({ secret: 'shh, secret!' }));
app.use(cookieparser());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded(({ extended: true })));
app.use(cors());

// app.use('/employee', employee);


app.get('/getUsers', function (request, response) {

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


app.post('/addUser', function (request, response) {
  console.log('Something');

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
      console.log('Added new user');
    }
  });
  response.end();
});

// Note tested as established this wasn't MVP for this project
app.put('/updateUser', function (request, response) {
  console.log('Something');

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


app.post('/login', function (request, response) {

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
        //Status code should be 205 but changed to 201 to handle unknown error in promise in frontend
        response.status(201).send(errorData);
      }
      else {
        console.log('User Found')
       
        request.session.role = data[0].role;
        request.session.username = data[0].username;
        request.session.name = data[0].name;
        console.log(request.session.name + 'test');
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




app.get('/getEmployee', function(request, response, next) {
   
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

  app.post('/addEmployee', function (request, response) {
    console.log('Something');
  
    console.log(request.body)
    
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



  app.delete('/deleteEmployee', function (request, response) {
    console.log('Something');
  
    console.log(request.body)
    var empno = request.body.empno;
  
    var sqlquery = `DELETE FROM employee  WHERE empno =  ${empno}`;
    // "DELETE FROM `employee` WHERE `employee`.`empno` = 5"
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


  app.put('/updateEmployee', function (request, response) {
    console.log('Something');
  
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

  







app.listen(2700);



