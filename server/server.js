const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
const bodyparser = require("body-parser");
const session = require("express-session");
const cors = require('cors');

const employee = require('./routes/employee');
const user = require('./routes/user');
const login = require('./routes/login');

app.use(cors());
app.use(session({ secret: 'shh, secret!' }));
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded(({ extended: true })));

app.use('/api/v1/employee', employee);
app.use('/api/v1/user', user);
app.use('/api/v1/login', login);



app.listen(2700);



