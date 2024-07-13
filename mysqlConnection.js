// To connection with mySql Database
const mysql= require("mysql");
// Load .env file 
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
}
const add=(a,b)=>{
    return a+b;
}
module.export=add;
    
   