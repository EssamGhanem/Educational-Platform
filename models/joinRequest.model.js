const { string } = require("joi");
const mongoose = require("mongoose");
const { isInstructor } = require("../middlewares/auth");
const { Schema } = mongoose;

const joinRequest = new Schema({


  student: {
    type: Schema.ObjectId,
    ref: "User",
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  course: {
    type: Schema.ObjectId,
    ref: "Course",
  },
  state: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  }
});

const JoinRequest = mongoose.model("JoinRequest", joinRequest);
module.exports = JoinRequest;
