var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const questions = require("../models/question");

//Return all public questions in database
router.get("/", async (req, res) => {
  questions
    .find({})
    .then((questions) => {
      const reply = [];
      questions.forEach((element) => {
        if (!element.private && !element.archive) reply.push(element);
      });
      if (reply.length > 0) {
        res.json(reply);
      } else {
        res.send(404);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Return all questions in database
router.get("/getAll", async (req, res) => {
  questions
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

//Return all questions of a single user
router.get("/:username", async (req, res) => {
  questions
    .find({ username: req.params.username })
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

//Return single question by ID
router.get("/question/:id", async (req, res) => {
  questions
    .find({ _id: req.params.id })
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

//Add question to database
router.post("/", async (req, res) => {
  if (req.body.title && req.body.username) {
    const newQuestion = new questions({
      title: req.body.title,
      body: req.body.body,
      tags: req.body.tags,
      username: req.body.username,
      votes: 0,
      username_of_voters: [],
      answers: 0,
      views: 0,
      private: req.body.private,
      archive: req.body.archive,
      invited: req.body.invited,
    });
    await newQuestion.save();
    await res.status(201).send("Question Added Succefully");
  } else {
    res.send(400);
  }
});

//Update question
router.put("/:id", async (req, res) => {
  questions
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((result) => {
      result ? res.send(201) : res.send(404);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Delete question by ID
router.delete("/:id", async (req, res) => {
  questions
    .deleteOne({ _id: req.params.id })
    .then((result) => {
      result ? res.send(201) : res.send(404);
    })
    .catch((err) => res.status(400).send(err));
});

//Archive a Question by ID
router.put("/archive/:id", async (req, res) => {
  questions
    .findOneAndUpdate(
      { _id: req.params.id },
      { $set: { archive: { $not: "$archive" } } }
    )
    .then((result) => {
      result ? res.send(201) : res.send(404);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
