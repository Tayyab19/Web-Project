var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const answers = require("../models/answer");

//Return all answers in database
router.get("/", async (req, res) => {
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
            res.send([]);
        }
    }).catch(err => {
        res.status(400).send(err);
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
      username_of_voters: [],
    });
    newAnswer.save((err, result) => {
      if(err){
        res.status(400);
      }else{
        res.status(201).send(result);
      }
    });
  } else {
    res.send(400);
  }
});

//Update answer
router.put("/:id", async (req, res) => {
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

module.exports = router;
