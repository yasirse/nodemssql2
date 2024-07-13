 var nodemailer = require('nodemailer');
 const express=  require("express");
 var crypto = require('crypto');
 require("dotenv").config();
 const app=express();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  }
});

console.log( "Email user=",process.env.user);
console.log( "Email user=",process.env.pass);

// Define a function to generate OTP asynchronously
function generateOTP(callback) {
  crypto.randomBytes(3, function(err, buffer) {
      if (err) {
          callback(err); // Handle error if there's an issue with crypto.randomBytes
      } else {
          let otp = parseInt(buffer.toString('hex'), 16).toString().substr(0, 6);
          callback(null, otp); // Pass null for error and OTP for success
      }
  });
}

// Usage example
generateOTP(function(err, otp) {
  if (err) {
      console.error('Error generating OTP:', err);
  } else {
      console.log('Generated OTP:', otp);

      // You can use otp here or pass it to another function
      // Example:
      sendOTPToUser(otp);
  }
});

sendOTPToUser=(otp)=>{
  
    var mailOptions = {
    from: 'yasir.arfatse@gmail.com',
    to: 'hina.nida@gmail.com,yasir.arfatse@gmail.com',
    subject: 'Sending Email using Node.js',
    text: '<h3>'+sendOTPToUser+'<h3/>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
app.listen(process.env.port, () => {
    console.log(`Node backend listening at http://localhost:${process.env.port}`)
  })