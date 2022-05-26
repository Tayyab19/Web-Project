var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const questions = require("../models/question");

//Return all questions in database
router.get("/", async (req, res) => {
    questions.find({}).then(questions => {
        if (questions.length > 0){
            res.json(questions);
        } else {
            res.send(404);
        }
    }).catch(err => {
        res.status(400).send(err);
    })
})

//Return all questions of a single user
router.get("/questions/:username", async (req, res) => {
    questions.find({username: req.params.username}).then(questions => {
        if (questions.length > 0){
            res.json(questions);
        } else {
            res.send(404);
        }
    }).catch(err => {
        res.status(400).send(err);
    })
})


module.exports = router;