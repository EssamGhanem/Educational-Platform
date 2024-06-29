const asyncWrapper = require('../../middlewares/asyncWrapper');
const Course = require('../../models/course.model');
const appError = require('../../utils/appError');
const addCourseValidation = require('../../validations/addCourseValidation');

module.exports = asyncWrapper(
  async (req,res,next)=>{
    const {error} = addCourseValidation.validate(req.body);
    
    if( error ){
      const resError = appError.create("please enter all data! " , 404 , "failed");
      return next(resError);
    }
    const newCourse =new Course(req.body) 
    await newCourse.save();
    return res.status(200).json({status:"success", data :{newCourse}})
  }
);