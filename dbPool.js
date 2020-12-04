const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "w8059ssiqxb5jfmg",
    password: "b542m5vynz5q17x0",
    database: "gh80bee9i0vf9lkl"
});

module.exports = pool;
