/*This file is used for MSSQL DB.Before using it, enable server.js file in package.json file for start command*/
const express=  require("express");
const sql =require("mssql/msnodesqlv8");
const app=express();
require("dotenv").config();

// enable json parsing
app.use(express.json());
// enable parsing of  form urlencoded data.
app.use(express.urlencoded({extended:true}));

var config={
    server:"DESKTOP-AOVK311\SQLEXPRESS",
    database:process.env.DATABASE,
    driver:process.env.DRIVER,
    user:"yasir",
    password:"yasir",
    options:{
        trustedConnecton:true,
    },};
    console.log(config);

    const db = sql.connect(config, function(err){
        if(err){throw(err)};
        console.log("Database connected");
    });

    
    app.get("/getuser", async function(req,res){
        const request = db.request();
        const result = await request.query("select * from user");
        res.json({msg:"fetch user succussfully",data:result.recordsets});
    })

app.listen(process.env.port, () => {
    console.log(`Node backend listening at http://localhost:${process.env.port}`)
  })