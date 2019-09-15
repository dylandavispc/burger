// SETUP MYSQL CONNECTION

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Dilldill1",
    database: "krusty"
});



// CONNECT

connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


// EXPORT CONNECTION FOR ORM

module.exports = connection;