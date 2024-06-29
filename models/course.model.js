const mongoose = require("mongoose");
const { type } = require("../validations/addLectureValiation");
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
  numOfStudents:[
    {
      type:Schema.ObjectId,
      ref:"User"
    },
  ],
  createdBy:{
    type:Schema.ObjectId,
    ref:"User"
  },
  lectures:[
    {
      type:Schema.Types.ObjectId,
      ref:"Lecture"
    }
  ]
  




},{timestamps:true});


const Course = mongoose.model('Course',courseSchema);
module.exports = Course;