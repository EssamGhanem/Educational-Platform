const validator = require("validator");
const mongoose = require("mongoose");
const { validate } = require("./course.model");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,  
  },
  email:{
    type: String,
    require: true,
    unique:true,
    validate:[validator.isEmail, "filed must be a valid email.."]  
  },
  password:{
    type: String,
    require: true
  },
  courses:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Course'
    }
  ],
  role: {
    type: String,
    enum : ['Admin','Instructor', 'Student'],
    require:true
},
  token:{
    type:String
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;