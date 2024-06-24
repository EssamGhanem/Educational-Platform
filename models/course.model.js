const mongoose = require("mongoose");
const {Schema} = mongoose;
//creating course schema
//{title - description - price - numberOfStudents - lectuers - numOfLectures - createdBy - createdDate  }
const courseSchema = new Schema({
  title:{
    type:String,
    require:true
  },
  description:{
    type:String,
    require:true
  },
  price:{
    type:String,
    require:true
  },
  numOfStudents:{
    type:Number,
    default:0
  },
  numOfLectures:{
    type:Number,
    default:0
  },
  createdBy:{
    type:String,
  },
  createdDate:{
    type:Date,
  }



});


const Course = mongoose.model('Course',courseSchema);
module.exports = Course;