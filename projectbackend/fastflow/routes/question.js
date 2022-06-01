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
router.get("/infintescrollquestions/:pagenumber", verifyToken, async (req, res) => {
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
    if (err) {
      res.sendStatus(403);
    } else {
      questions
      .find({})
      .then((questions) => {
        const reply = [];
        questions.forEach((element, index) => {
          if(index >= req.params.pagenumber * 10 && index < (req.params.pagenumber * 10) + 10){
            reply.push(element);
          }
        });
        if (reply.length > 0) {
          res.json({"questions": reply,
            "totalQuestions": questions.length,
        });
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

//Return all questions of a single user Infinite Scroll
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

//Return Questions with term in Title
router.post('/search/search',verifyToken, async (req, res) => {
    jwt.verify(req.token, ACCESS_TOKEN_SECRET, (err, username) => {
      if (err) {
        res.sendStatus(403);
      } else {
        questions
          .find({ title: {$regex : req.body.searchTerm} })
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
              console.log(err)
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
  jwt.verify(req.token, ACCESS_TOKEN_SECRET, async (err, username) => {
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
        const result = await newQuestion.save();
        res.status(201).send({_id:result._id,username:username.username});
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

//Get Questions from list of question ids
router.post('/getListQuestion', async (req,res)=> {
    let data = []
    const idList = req.body._idList

    for (let i = 0; i < idList.length; i++){
        const result = await questions.findById(idList[i])
        data.push(result)
    }

    res.status(200).json({questions:data});
  })

module.exports = router;
