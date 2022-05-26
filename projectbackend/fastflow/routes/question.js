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
router.get("/:username", async (req, res) => {
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

//Return single question by ID
router.get("/question/:id", async (req, res) => {
    questions.find({_id: req.params.id}).then(questions => {
        if (questions.length > 0){
            res.json(questions);
        } else {
            res.send(404);
        }
    }).catch(err => {
        res.status(400).send(err);
    })
})

//Add question to database
router.post("/", async (req, res) => {
    if(req.body.title && req.body.username) {
        const newQuestion = new questions({
            title: req.body.title,
            body: req.body.body,
            tags: req.body.tags,
            username: req.body.username,
            votes: 0,
            answers: 0,
            views: 0,
            private: req.body.private,
            archive: req.body.archive,
            invited: req.body.invited,
        })
        newQuestion.save();
        res.status(201).send("Question Added Succefully");
    }else{
        res.send(400);
    }
})

//Update question
router.put("/:id", async (req, res) => {
    questions.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
        result ? res.send(201) : res.send(404)
    }).catch(err => {res.status(400).send(err)})
})

//Delete question by ID
router.delete("/:id", async (req, res) => {
    questions.deleteOne({_id: req.params.id}).then(result => {
        result ? res.send(201) : res.send(404)
    }).catch(err => res.status(400).send(err));
})

module.exports = router;