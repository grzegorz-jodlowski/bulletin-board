const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, 'Email required'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  created: { type: Date, required: [true, 'Create date required'] },
  updated: { type: Date, required: [true, 'Update date required'] },
  status: { type: String, required: [true, 'Status required'], enum: ['draft', 'published', 'closed'] },
  title: { type: String, required: [true, 'Title required'], minlength: 10 },
  text: { type: String, required: [true, 'Description required'], minlength: 20 },
  photo: { type: String },
  price: { type: Number },
  phone: { type: String },
  location: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
