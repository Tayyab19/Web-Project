var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const answers = require("../models/answer");

//Return all Answers in database
router.get("/", async (req, res) => {
  answers
    .find({})
    .then((questions) => {
      if (questions.length > 0) {
        res.json(questions);
      } else {
        res.send(404);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
