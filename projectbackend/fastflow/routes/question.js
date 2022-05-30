var express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
var router = express.Router();
const questions = require("../models/question");

//JWT
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

//Return all public questions in database
router.get("/", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
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
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        res.status(400).send(err);
      });
    }
  })
});

//Return all questions in database
router.get("/getAll", async (req, res) => {
  questions
    .find({})
    .then((questions) => {
      if (questions.length > 0) {
        res.json(questions);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Return all questions of a single user that are not archived or private
router.get("/:username", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
      questions
        .find({ username: req.params.username })
        .then((questions) => {
            const reply = [];
            questions.forEach((element) => {
              if (!element.private && !element.archive) reply.push(element);
            });
            if (reply.length > 0) {
              res.json({questions : reply, username : username.username});
            } else {
              res.sendStatus(404);
            }
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  });
});

//Return all question of current user
router.get("/myQuestions/thisUser", verifyToken, async (req, res) => {
    jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
      if (err) {
        res.sendStatus(403);
      } else {
        questions
          .find({ username: username.username })
          .then((questions) => {
              if (questions.length > 0) {
                res.json({questions : questions, username : username.username});
              } else {
                res.sendStatus(404);
              }
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      }
    });
  });
  

//Return single question by ID
router.get("/question/:id", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
      questions
        .find({ _id: req.params.id })
        .then((questions) => {
          if (questions.length > 0) {
            res.json({
              questions: questions,
              username: username.username,
            });
          } else {
            res.send(404);
          }
        })
        .catch((err) => {
          res.status(400).send(err);
        });
  }});
});

//Add question to database
router.post("/", verifyToken, async (req, res) => {
  await jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
      if (req.body.title) {
        const newQuestion = new questions({
          title: req.body.title,
          body: req.body.body,
          tags: req.body.tags,
          username: username.username,
          votes: 0,
          username_of_voters: [],
          answers: 0,
          views: 0,
          private: req.body.private,
          archive: req.body.archive,
          invited: req.body.invited,
        });
        newQuestion.save();
        res.status(201).send(username.username);
  } else {
    res.send(400);
  }
  }}); 
});

//Update question
router.put("/:id", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
  questions
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((result) => {
      result ? res.send(201) : res.send(404);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  }});
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
router.patch("/archive/:id", async (req, res) => {
  questions
    .findOneAndUpdate({ _id: req.params.id }, [
      { $set: { archive: { $not: "$archive" } } },
    ])
    .then((result) => {
      result ? res.send(201) : res.send(404);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
