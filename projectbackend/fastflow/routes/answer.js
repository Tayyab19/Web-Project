var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const answers = require("../models/answer");
const jwt = require("jsonwebtoken");

ACCESS_TOKEN_SECRET = "kajnkankjxnasnxkajsxkansx";

function verifyToken(req, res, next) {
  const header = req.headers['authorization'];
  if(typeof header !== 'undefined'){
    const token = header;
    req.token = token;
    next();
  }else{
    res.sendStatus(403);
  }
}


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
router.get("/question/:qid", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
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
  }});
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
router.post("/", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET,async  (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
  if (req.body.body && req.body.username) {
    const newAnswer = new answers({
      username: req.body.username,
      question_id: req.body.question_id,
      body: req.body.body,
      votes: 0,
      username_of_voters: [],
    });
    const result2 = await newAnswer.save();
    let count = (await answers.find({username:req.body.username})).length
    res.status(201).json({answer:result2,userCount:count});

  } else {
    res.send(400);
  }
  }});
});

//Update answer
router.put("/:id", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
    answers.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
        result ? res.send(200) : res.send(404)
    }).catch(err => {res.status(400).send(err)})
  }});
})

//Delete answer by ID
router.delete("/:id", async (req, res) => {
    answers.deleteOne({_id: req.params.id}).then(result => {
        result ? res.send(200) : res.send(404)
    }).catch(err => res.status(400).send(err));
})

module.exports = router;
