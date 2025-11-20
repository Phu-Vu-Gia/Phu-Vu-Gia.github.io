// models/Thread.js
// This is just a blueprint — you don't need to run anything yet

const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  author: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const threadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  replies: [replySchema],
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// Export model (only used later when server runs)
module.exports = mongoose.model('Thread', threadSchema);