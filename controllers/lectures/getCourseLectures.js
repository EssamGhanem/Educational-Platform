const asyncWrapper = require('../../middlewares/asyncWrapper');
const Course = require('../../models/course.model');
const appError = require('../../utilities/appError');
const Lectuer = require('../../models/lecture.model');
const httpStatus = require('../../utilities/httpStatus');

module.exports = asyncWrapper(
  async (req,res,next)=>{
  const courseId = req.params.id;
  if(!await Course.findById(courseId)){
    next(appError.create("cant find the course..? ", 404 , httpStatus.FAILD));
  }
  const lectuers = await Lectuer.find({courseId},{title:true,link:true, _id:true});
    return res.status(200).json({status:"success", data :{lectuers}})
  }
);