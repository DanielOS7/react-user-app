var mysql=require('mysql');

module.exports=function connection(){
var con = mysql.createConnection({
 host:"localhost",
 user:"root",
 database:"nationwide"
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