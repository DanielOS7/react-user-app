var express = require("express");
var app = express();
var cookieparser = require("cookie-parser");
var bodyparser = require("body-parser");
var session = require("express-session");
var cors = require('cors');

var employee = require('./routes/employee');
var user = require('./routes/user');
var login = require('./routes/login');

app.use(session({ secret: 'shh, secret!' }));
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded(({ extended: true })));
app.use(cors());

app.use('/api/v1/employee', employee);
app.use('/api/v1/user', user);
app.use('/api/v1/login', login);



app.listen(2700);



