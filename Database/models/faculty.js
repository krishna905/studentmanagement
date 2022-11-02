const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  facultyName: { type: String, required: true },
  facultyId: { type: Number, required: true, unique: true },
  classNo: { type: String, min: 1, max: 10 },
  phone: { type: Number, required: true },
  facultyEmail: { type: String },
  selectedFile: { type: String },
});

module.exports = mongoose.model('faculty', facultySchema);
