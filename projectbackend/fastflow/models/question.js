const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: { type: String, required: true },
    body: String,
    tags: Array,
    username: { type: String, required: true },
    votes: Number,
    answers: Number,
    views: Number,
    private: Boolean,
    archive: Boolean,
    invited: Array,
})

module.exports = mongoose.model('questions', schema);