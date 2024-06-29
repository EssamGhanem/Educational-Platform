const asyncWrapper = require("../../middlewares/asyncWrapper");
const Lectuer = require("../../models/lecture.model");
const appError = require("../../utils/appError");
const addCourseValidation = require("../../validations/addCourseValidation");
const httpStatus = require("../../utils/httpStatus");



module.exports = asyncWrapper(async (req, res, next) => {
  const lectureId = req.params.id ;
  const lecture = await Lectuer.findById(lectureId);
  
  if(!lecture){
    const error = appError.create("Cant find the Lecture ...!", 404 , httpStatus.FAILD);
    return next(error);
  }

    await Lectuer.deleteOne({_id:req.params.id });
    res.json({
      status: httpStatus.SUCCESS,
      message: "Lecture deleted successfully...",
      data: null,
    });
  


});
