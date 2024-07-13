// app.js
const express=  require("express");
const app=express();
const sendOTPEmail = require('./controller/sendEmail');

// enable json parsing
app.use(express.json());
// enable parsing of  form urlencoded data.
app.use(express.urlencoded({extended:true}));
// Example usage: Send OTP to this email address
const userEmail = 'yasir.arfatse@gmail.com';

sendOTPEmail(userEmail);

app.listen(process.env.port, () => {
    console.log(`Node backend listening at http://localhost:${process.env.port}`)
  })
