const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: { type: String, minlength: 5, required: true },
  password: { type: String, minlength: 6, required: true },
  email: { type: String, minlength: 5, required: true },
  verified: Boolean,
  firstName: String,
  lastName: String,
  reputation: Number,
  badges: Array,
  githubHandle: String,
  linkedInHandle: String,
  preferredStack: String,
  invites: Array,
  company: String,
  profilePhoto: String,
});

module.exports = mongoose.model("users", schema);
