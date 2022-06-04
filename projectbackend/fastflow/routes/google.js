var express = require("express");
var router = express.Router();
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const users = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const url = require("url");

var userProfile;

function generateAccessToken(username) {
  return jwt.sign(username, ACCESS_TOKEN_SECRET, {expiresIn: "45m"}) 
}

router.get('/success', (req,res) => console.log(userProfile))

router.get('/error', (req,res)=> res.send('error'))

passport.serializeUser((user,cb) => {
    cb(null,user)
})

passport.deserializeUser((obj,cb)=>{
    cb(null,obj)
})

const GOOGLE_CLIENT_ID = '943308053357-5ob0cq3qkrbpt0a7q8c5iscr91t6d0bf.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
router.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: 'https://localhost:3000/' }),
  function(req, res) {
    // Successful authentication, redirect success.
    console.log(userProfile._json);
    users.findOne({username:userProfile._json.email}).then(async (response,err)=>{
      if(err){
        res.send(403);
        return;
      }
      else{
        if(response){
          let encryptedPassword = (
            await users.findOne({ email: userProfile._json.email }).select("password")
          ).password;

          let password = "googleLogin";
          await bcrypt.compare(password, encryptedPassword).then((flag) => {
            if (flag) {
              if (userProfile._json.email_verified){
              const username = userProfile._json.email;
              const accessToken = generateAccessToken({ username: username });
              res.append("accessToken", accessToken);
              res.redirect(`http://localhost:3000/questions/${accessToken}`);
              
              
            }
            else{
              res.status(500).send({ Message: "Please Verify Your Account" });
              return;
            }
            } else {
              res
                .status(500)
                .send({ Message: "Invalid Username/Password Combination" });
              return;
            }
          });
        }
        else{
          console.log(userProfile._json);
          const password = await bcrypt.hash("googleLogin", 10);
          const result = await users.create({
            email: userProfile._json.email,
            password: password,
            username: userProfile._json.email,
            firstName: userProfile._json.given_name,
            verified: userProfile._json.email_verified,
            lastName: userProfile._json.family_name,
            reputation: 0,
            badges: [],
            githubHandle: "",
            linkedInHandle: "",
            preferredStack: "",
            invites: [],
            company: "",
            profilePhoto: "",
          });
    
          if (result.email != null) {
            const accessToken = generateAccessToken({ username: userProfile._json.username });
            res.status(200).json({
              accessToken: accessToken,
            });   
            return;    
          } else {
            res.status(500).send({ Message: "An Unexpected Error Occured" });
            return;
          }
        }
      }
    })
  });

module.exports = router