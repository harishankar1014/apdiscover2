const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema({
    title: String,
    comment: String
  })
);

module.exports = Comment;