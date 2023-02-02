// imports
const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: String,
  emailID: String,
  password: String,
});

module.exports = mongoose.model("User", User);
