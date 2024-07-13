const express=  require("express");
const sql = require('mssql');

 (async () => {
        try {
            const value=1;
            // make sure that any items are correctly URL encoded in the connection string
            await sql.connect('Server=localhost,1433;Database=yasir;User Id=yasir;Password=yasir;Encrypt=true')
            const result = await sql.query`select * from user where id = ${value}`
            console.dir(result)
        } catch (err) {
            // ... error checks
            console.log(err);
        }
    })()
    