var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const users = require("../models/user");

//Return all Users in database
router.get("/", async (req, res) => {
  users
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

module.exports = router;
