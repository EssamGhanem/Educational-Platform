const asyncWrapper = require("../../middlewares/asyncWrapper");
const Course = require("../../models/course.model");
const appError = require("../../utils/appError");
const httpStatus = require("../../utils/httpStatus");

module.exports = asyncWrapper(async (req, res, next) => {
  
  const courseId = req.params.id;
  if(!courseId){
    const error = appError.create("ID is missing...",404, httpStatus.ERROR);
    return next(error);
  }
  
  const course = await Course.findById(courseId);
  return res.status(200).json({ status: "success", data: { course } });
});
