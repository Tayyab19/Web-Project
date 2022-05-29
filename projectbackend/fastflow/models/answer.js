const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: { type: String, required: true },
    question_id: mongoose.Types.ObjectId, 
    body: String,
    votes: Number,
    username_of_voters: Array,
})

module.exports = mongoose.model('answers', schema);
