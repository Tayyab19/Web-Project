var express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
var router = express.Router();
const users = require("../models/user");

//Return all Users in database
router.get("/", async (req, res) => {
  await users
    .find({})
    .then((users) => {
      if (users.length > 0) {
        res.json(users);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Delete a User by email
router.delete("/:id", async (req, res) => {
  await users.deleteOne({ email: email });
  res.send("Deleted");
});

//Register a User in database
router.post("/signup", async (req, res) => {
  if (req.body.email == null) {
    res.status(400).send({ Message: "Missing Email" });
  } else if (req.body.password == null) {
    res.status(400).send({ Message: "Missing Password" });
  } else if (req.body.username == null) {
    res.status(400).send({ Message: "Missing Username" });
  } else {
    const email = req.body.email;
    const password = await bcrypt.hash(req.body.password, 10);
    const username = req.body.username;

    const usersWithEmail = await users.findOne({ email: email });
    const usersWithUsername = await users.findOne({ username: username });

    if (usersWithEmail != null || usersWithUsername != null) {
      res.status(409).send({ Message: "User Already Exists" });
    } else {
      let firstName = " ",
        lastName = " ",
        reputation = 0,
        badges = [],
        githubHandle = " ",
        linkedInHandle = " ",
        preferredStack = " ",
        invites = [],
        verified = false,
        company = " ";
      profilePhoto =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC";

      const result = await users.create({
        email: email,
        password: password,
        username: username,
        firstName: firstName,
        verified: verified,
        lastName: lastName,
        reputation: reputation,
        badges: badges,
        githubHandle: githubHandle,
        linkedInHandle: linkedInHandle,
        preferredStack: preferredStack,
        invites: invites,
        company: company,
        profilePhoto: profilePhoto,
      });

      if (result.email != null) {
        const accessToken = generateAccessToken({ username: username });
        const link = 'http://localhost:5000/users/verify/'+accessToken
        const result2 = sendEmail(result.email, "Account Activation Link", link);
        if (result2)
          res.sendStatus(201);
        else{
          await users.findOneAndDelete({email:email});
          res.sendStatus(500);
        }
      } else {
        res.status(500).send({ Message: "An Unexpected Error Occured" });
      }
    }
  }
});

//JWT
ACCESS_TOKEN_SECRET = "kajnkankjxnasnxkajsxkansx"

function generateAccessToken(username) {
  return jwt.sign(username, ACCESS_TOKEN_SECRET, {expiresIn: "45m"}) 
}

verifyToken = (req, res, next) => {
  const header = req.headers['authorization'];
  if(typeof header !== 'undefined'){
    const token = header;
    req.token = token;
    next();
  }else{
    res.sendStatus(403);
  }
}

//User Login
router.post("/signin", async (req, res) => {
  if (req.body.email == null) {
    res.status(400).send({ Message: "Missing Email" });
  } else if (req.body.password == null) {
    res.status(400).send({ Message: "Missing Password" });
  } else {
    const email = req.body.email;
    const userWithEmail = await users.findOne({ email: email });

    if (userWithEmail == null) {
      res.status(409).send({ Message: "User Does'nt Exists" });
    } else {
      let password = req.body.password;
      let encryptedPassword = (
        await users.findOne({ email: email }).select("password")
      ).password;

      await bcrypt.compare(password, encryptedPassword).then((flag) => {
        if (flag) {
          const username = userWithEmail.username;
          const accessToken = generateAccessToken({ username: username });
          res.status(200).json({
            accessToken: accessToken,
          });
        } else {
          res
            .status(500)
            .send({ Message: "Invalid Username/Password Combination" });
        }
      });
    }
  }
});

//Get a Particular User from User ID
router.get("/profile/:username", async (req, res) => {
  if (req.params.username != null) {
    const thisUser = await users.findOne({ username: req.params.username });

    if (thisUser != null) {
      res.status(200).json(thisUser);
    } else res.sendStatus(404);
  } else res.sendStatus(400);
});

//Edit Profile
router.patch("/profile/edit", async (req, res) => {
  const body = req.body;

  if (body != null) {
    try {
      await users.findOneAndUpdate(
        { username: body.username },
        {
          firstName: body.firstName,
          lastName: body.lastName,
          githubHandle: body.githubHandle,
          linkedInHandle: body.linkedInHandle,
          preferredStack: body.preferredStack,
          company: body.company,
          profilePhoto: body.profilePhoto,
        }
      );

      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(400);
  }
});

//Edit Password
router.patch("/profile/editPassword", async (req, res) => {
  const body = req.body;

  if (body != null) {
    const password = await bcrypt.hash(body.password, 10);

    try {
      await users.findOneAndUpdate(
        { username: body.username },
        {
          password: password,
        }
      );

      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(400);
  }
});

//Send Password Reset Link
router.post("/forgotPassword", async (req, res) => {
  if (req.body.email) {
    const accessToken = generateAccessToken({ username: username });
    const link = 'http://localhost:5000/users/forgotPassword/'+accessToken
    const result = sendEmail(req.body.email, "Password Reset Link", link);
    if (result)
      res.sendStatus(200);
    else
      res.sendStatus(500);
  }
});

//Save new Password 
router.post("/resetPassword", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
      users
        .findOneAndUpdate({ username: username.username }, {password:req.body.password})
        .then((thisUser) => {
          if (thisUser != null) {
            res.sendStatus(200);
          } else res.sendStatus(404);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  });
});

//Verify account
router.post("/verify", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
      users
        .findOneAndUpdate({ username: username.username }, {verified:true})
        .then((thisUser) => {
          if (thisUser != null) {
            res.sendStatus(200);
          } else res.sendStatus(404);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  });
});

//Get the User currently logged into the system
router.get("/myProfile", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
      users
        .findOne({ username: username.username })
        .then((thisUser) => {
          if (thisUser != null) {
            res.status(200).json(thisUser);
          } else res.sendStatus(404);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  });
});

router.put("/profile/reputation",async (req, res) => {
  await users.findOneAndUpdate(
    { username: req.body.username }, { $inc: { reputation: parseInt(req.body.reputation) } }, (err, response) => {
        if (err) {
          res.send(404);
        } else {
          res.send(200);
        } 
    });
    res.send(200);
})

const sendEmail = (email, subject, link) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "expertwebdev6@gmail.com",
      pass: "L18-1082a",
    },
  });

  var mailOptions = {
    from: "expertwebdev6@gmail.com",
    to: email,
    subject: subject,
    text: `This is the ${subject} for your StackOverflowClone account. If you did not request this, please ignore it.\n${link}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err); 
      return false;
    } else return true;
    
  });
}

module.exports = router;