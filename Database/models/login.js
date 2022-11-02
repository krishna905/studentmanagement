const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  Name: { type: String },
  userName: { type: String, index: { unique: true, sparse: true } },
  password: { type: String },
});

module.exports = mongoose.model('login', LoginSchema);
