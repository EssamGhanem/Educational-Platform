const { link } = require("joi");
const mongoose = require("mongoose");
const {Schema} = mongoose;


const lectureSchema = new Schema({
    title : {
      type:String,
      require:true
    },
    link:{
      type:String, 
      require: true
    },
    courseId:{
      type:String, 
      require: true      
    }
});


const Course = mongoose.model('Lecture',lectureSchema);
module.exports = Course;