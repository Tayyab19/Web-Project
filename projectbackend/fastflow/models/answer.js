const mongoose = require("mongoose");

const schema = mongoose.Schema({
  body: { type: String, required: true },
  username: { type: String, required: true },
  votes: Number,
  questionId: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("answers", schema);
