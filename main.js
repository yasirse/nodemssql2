// app.js
const express=  require("express");
const app=express();
const sendOTPEmail = require('./controller/sendEmail');
const user = require('./model/user');


// enable json parsing
app.use(express.json());
// enable parsing of  form urlencoded data.
app.use(express.urlencoded({extended:true}));
// Example usage: Send OTP to this email address

app.use('/api/auth', require('./routes/auth'))
app.use('/api/auth', require('./routes/auth'))
// const userEmail = 'yasir.arfatse@gmail.com';
// const email="yasir.arfatse@gmail.com";
// console.log(user.finduser(email));

//sendOTPEmail(userEmail);

app.listen(process.env.port, () => {
    console.log(`Node backend listening at http://localhost:${process.env.port}`)
  })
