const { log } = require("console");
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
// checking the server connection
app.get("/", (req, res) => {
  res.send("Hello World!");
});
////////////

//routing:
const courseRouter = require('./routers/course.router');
const lectureRouter = require('./routers/lecture.router');
const authRouter = require("./routers/auth");
const studentRouter = require('./routers/student.router');
const instructorRouter = require('./routers/instructor.router');
app.use('/course',courseRouter);
app.use('/lecture',lectureRouter);
app.use("/auth",authRouter);
app.use('/student',studentRouter);
app.use('/instructor',instructorRouter);


//error handler
app.use((error,req,res,next)=>{
  res.status(error.statusCode || 500).json({status:error.statusText || "error", message:error.message , data : null});
  next();
});
























//connect to mongo using mongoose.js
const mongoose = require("mongoose");
const { devNull } = require("os");
async function connect() {
  await mongoose.connect(process.env.DB_URL);
  console.log("connect to DB successfully....!");
}
connect().catch((err) => {
  console("connection to mongo failed ...X ", err);
});
///////////////

// starting the server on port:5000
app.listen(process.env.PORT, () => {
  console.log("server is running of PORT: " + process.env.PORT);
});
