const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  instructor: String,
  image:String,
 
},{timestamps:true});

module.exports = mongoose.model('Course', courseSchema);
