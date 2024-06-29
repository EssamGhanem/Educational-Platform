const asyncWrapper = require("../../middlewares/asyncWrapper");
const Course = require("../../models/course.model");
const appError = require("../../utils/appError");
const addCourseValidation = require("../../validations/addCourseValidation");
const httpStatus = require("../../utils/httpStatus");
module.exports = asyncWrapper(async (req, res, next) => {
  if (req.params.id == {}) {
    const error = appError.create(
      "please send the course id..",
      400,
      httpStatus.FAILD
    );
    return next(error);
  }
  const course = await Course.findById(req.params.id);


    await Course.deleteOne({_id:req.params.id });
    res.json({
      status: httpStatus.SUCCESS,
      message: "course deleted successfully...",
      data: null,
    });
  


});
