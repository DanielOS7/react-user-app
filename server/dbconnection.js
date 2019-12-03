var mysql=require('mysql');
let allConfig = require('./config.js');
let profile = allConfig.currentProfile;
let config = allConfig[profile];


module.exports=function connection(){
let database = config.database;

var con = mysql.createConnection({
 host: database.host,
 user: database.user,
 database: database.name
});

con.connect(function(err) {
 if (err) {
 console.log("Error in connectionnn");
 }else{
 console.log("Connected!!!");
 }
});
return con;
}