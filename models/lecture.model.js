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
    course:{
      type:Schema.Types.ObjectId, 
      ref:"Course"     
    }
});


const Course = mongoose.model('Lecture',lectureSchema);
module.exports = Course;