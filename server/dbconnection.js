const mysql = require('mysql');
const allConfig = require('./config.json');
const profile = allConfig.currentProfile;
const config = allConfig[profile];


module.exports = function connection() {
    const database = config.database;

    const con = mysql.createConnection({
        host: database.host,
        user: database.user,
        password: database.password,
        database: database.name
    });

    con.connect((err) => {
        if (err) {
            console.log("Error in connectionnn");
        } else {
            console.log("Connected!!!");
        }
    });
    return con;
}