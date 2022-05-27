var express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
      });

      if (result.email != null) {
        res.status(201).send({
          Message: "User Registered",
        });
      } else {
        res.status(500).send({ Message: "An Unexpected Error Occured" });
      }
    }
  }
});

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
          // const accessToken = generateAccessToken({ user: email });
          // res.json({
          //   accessToken: accessToken,
          // });
          res.status(200).json({
            name: userWithEmail.username,
          });
        } else {
          //Look for Status Code
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

module.exports = router;
