const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: { type: String, required: true },
    question_id: mongoose.Types.ObjectId, 
    body: String,
    votes: Number,
})

module.exports = mongoose.model('answers', schema);
