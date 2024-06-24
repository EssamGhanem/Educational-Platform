const asyncWrapper = require("../../middlewares/asyncWrapper");
const Course = require("../../models/course.model");
const appError = require("../../utilities/appError");
const httpStatus = require("../../utilities/httpStatus");

module.exports = asyncWrapper(async (req, res, next) => {
  const courseId = req.params.id;
  const course = await Course.findById(courseId);
  
  if(!course){
    const error = appError.create("Cant find the Course ...!", 404 , httpStatus.FAILD);
    return next(error);
  }
  await Course.updateOne({ _id: courseId }, req.body);
  const updatedCourse = await Course.findById(courseId);


  return res.status(200).json({ status: "success", data: { updatedCourse } });
});
