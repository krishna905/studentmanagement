const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  StudentName: { type: String, trim: true, minlength: 3 },
  bio: {
    type: String,
    trim: true,
    minlength: 3,
    default: 'Hard Working Student',
  },
  CollegeId: { type: Number, index: { unique: true, sparse: true } },
  EmailId: { type: String, index: { unique: true, sparse: true } },
  PhoneNo: { type: Number, index: { unique: true, sparse: true } },
  FeeStatus: { type: Boolean },
  CGPA: { type: Number, min: 1, max: 10, default: '10' },
  English: { type: Number, min: 0, max: 100, required: true, default: '100' },
  Science: { type: Number, min: 0, max: 100, required: true, default: '100' },
  Maths: { type: Number, min: 0, max: 100, required: true, default: '100' },
  History: { type: Number, min: 0, max: 100, required: true, default: '100' },
  French: { type: Number, min: 0, max: 100, required: true, default: '100' },

  TotalNoOfSubjects: {
    type: Number,
    min: 0,
    max: 7,
    required: true,
    default: '7',
  },
  img: {
    type: String,
    default:
      'https://th.bing.com/th/id/R.6b3fd5f71c922d86cc54d03e73c83210?rik=iwwwd68zzCk99A&riu=http%3a%2f%2fworkhound.com%2fwp-content%2fuploads%2f2017%2f05%2fplaceholder-profile-pic.png&ehk=vQR6XmULBW6ukgzsWcZvnW%2bixG9YuP4RAwFRY767yow%3d&risl=&pid=ImgRaw&r=0',
  },
  classStrength: {
    type: Number,
    min: 0,
    max: 60,
    required: true,
    default: '60',
  },
  class: { type: String, default: '8' },
  NoOfSports: { type: Number, min: 0, max: 5, required: true, default: '5' },

  cricket: { type: Number, min: 0, max: 100, required: true, default: '50' },
  kabadi: { type: Number, min: 0, max: 100, required: true, default: '30' },
  badminton: { type: Number, min: 0, max: 100, required: true, default: '20' },
  basketball: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    default: '0',
  },
  hockey: { type: Number, min: 0, max: 100, required: true, default: '0' },

  Overall_Attendence_percentage: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    default: '100',
  },
  AJanFebMarch: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    default: '100',
  },
  AAprMayJun: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    default: '100',
  },
  AJulyAugSept: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    default: '100',
  },
  AOctNov: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    default: '100',
  },
  ADec: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    default: '100',
  },

  Notification1: {
    type: String,
    trim: true,
    minlength: 3,
    default: 'This is Notification1',
  },
  Notification2: {
    type: String,
    trim: true,
    minlength: 3,
    default: 'This is Notification2',
  },

  Notification3: {
    type: String,
    trim: true,
    minlength: 3,
    default: 'This is Notification3',
  },
  Notification4: {
    type: String,
    trim: true,
    minlength: 3,
    default: 'This is Notification4',
  },
  Notification5: {
    type: String,
    trim: true,
    minlength: 3,
    default: 'This is Notification5',
  },
});
module.exports = mongoose.model('Student', studentSchema);
