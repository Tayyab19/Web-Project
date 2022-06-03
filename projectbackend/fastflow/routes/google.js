var express = require("express");
var router = express.Router();
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var userProfile;

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
    console.log(userProfile._json)
    res.redirect('https://localhost:3000/');
  });

module.exports = router