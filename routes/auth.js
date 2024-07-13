const express=require('express');
const route=express.Router();
const user = require('../model/user');
const { body, validationResult } = require('express-validator');

  
// // ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
route.post('/createuser',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
  ], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try 
    {
      // Check whether the user with this email exists already
      let founduser =await user.finduser(req.body.email);
      console.log("user id in auth file=",founduser);
      if (founduser==="FOUND") {
        return res.status(400).json({ error: "Sorry a user with this email already exists" })
      }
      else if(founduser==="NULL")
        {
          return res.json({userid:"registered"});
        }      
      
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });

module.exports = route
  