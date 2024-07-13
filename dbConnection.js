// src/utils/otp.js
const mysql= require("mysql");
require("dotenv").config(); 

// mySql connection setting
const dbConnection =()=>{
    db= mysql.createConnection({
     host:process.env.HOST,
     user: process.env.USER,
     password:process.env.PASSWORD,
     database:process.env.DATABASE
 });
 db.connect((err)=>{
     if(err) throw(err);
         console.log("Database connected");
     });
     return db;
}

module.exports = dbConnection;
