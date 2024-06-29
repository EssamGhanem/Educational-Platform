const asyncWrapper = require('../../middlewares/asyncWrapper');
const Course = require('../../models/course.model');
const appError = require('../../utils/appError');
const Lectuer = require('../../models/lecture.model');
const httpStatus = require('../../utils/httpStatus');

module.exports = asyncWrapper(
  
  async (req,res,next)=>{
  const courseId = req.params.id;
  if(!await Course.findById(courseId)){
    next(appError.create("cant find the course..? ", 404 , httpStatus.FAILD));
  }

  const courseLec = await Course.findById(courseId,{title:true,price:true}).populate('lectures');
    return res.status(200).json({status:"success", data :{courseLec}})
  }
);