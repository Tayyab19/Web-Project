var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const answers = require("../models/answer");

//Return all answers in database
router.get("/", async (req, res) => {
<<<<<<< HEAD
    answers.find({}).then(answers => {
        if (answers.length > 0){
            res.json(answers);
        } else {
            res.send(404);
        }
    }).catch(err => {
        res.status(400).send(err);
    })
})

//Return all answers of a single question
router.get("/question/:qid", async (req, res) => {
    answers.find({question_id: req.params.qid}).then(answers => {
        if (answers.length > 0){
            res.json(answers);
        } else {
            res.send(404);
        }
    }).catch(err => {
        res.status(400).send(err);
=======
  answers.find({}).then((answers) => {
    if (answers.length > 0) {
      res.json(answers);
    } else {
      res.sendStatus(404);
    }
  });
});

//Return all answers of a single user
router.get("/:username", async (req, res) => {
  answers
    .find({ username: req.params.username })
    .then((answers) => {
      if (answers.length > 0) {
        res.json(answers);
      } else {
        res.send(404);
      }
>>>>>>> 056d5d9f61a9f3c7cada74f8c0525c50c6b1326d
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Return single answer by ID
router.get("/answer/:id", async (req, res) => {
  answers
    .find({ _id: req.params.id })
    .then((answers) => {
      if (answers.length > 0) {
        res.json(answers);
      } else {
        res.send(404);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Add answer to database
router.post("/", async (req, res) => {
  if (req.body.body && req.body.username) {
    const newAnswer = new answers({
      username: req.body.username,
      question_id: req.body.question_id,
      body: req.body.body,
      votes: 0,
    });
    newAnswer.save();
    res.status(201).send("Answer Added Succefully");
  } else {
    res.send(400);
  }
});

//Update answer
router.put("/:id", async (req, res) => {
<<<<<<< HEAD
    answers.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
        result ? res.send(200) : res.send(404)
    }).catch(err => {res.status(400).send(err)})
})

//Delete answer by ID
router.delete("/:id", async (req, res) => {
    answers.deleteOne({_id: req.params.id}).then(result => {
        result ? res.send(200) : res.send(404)
    }).catch(err => res.status(400).send(err));
})
=======
  answers
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((result) => {
      result ? res.send(201) : res.send(404);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Delete answer by ID
router.delete("/:id", async (req, res) => {
  answers
    .deleteOne({ _id: req.params.id })
    .then((result) => {
      result ? res.send(201) : res.send(404);
    })
    .catch((err) => res.status(400).send(err));
});
>>>>>>> 056d5d9f61a9f3c7cada74f8c0525c50c6b1326d

module.exports = router;
