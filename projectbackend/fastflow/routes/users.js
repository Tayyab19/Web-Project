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
        invites = [];

      const result = await users.create({
        email: email,
        password: password,
        username: username,
        firstName: firstName,
        lastName: lastName,
        reputation: reputation,
        badges: badges,
        githubHandle: githubHandle,
        linkedInHandle: linkedInHandle,
        preferredStack: preferredStack,
        invites: invites,
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

module.exports = router;
