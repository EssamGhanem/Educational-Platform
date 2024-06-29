const asyncWrapper = require('../../middlewares/asyncWrapper');
const Course = require('../../models/course.model');
const Lecture = require('../../models/lecture.model');
const addLectureValidation = require('../../validations/addLectureValiation');
const appError = require('../../utils/appError');
const httpStatus = require('../../utils/httpStatus');

module.exports = asyncWrapper( async (req,res,next)=>{

  const {error} = addLectureValidation.validate(req.body)
  if(error)
    {
      next(appError.create("missing data in req.body ...!"), 404 , httpStatus.ERROR );
    }
    const newLecture =new Lecture(req.body);
    await newLecture.save();
    await Course.updateOne({_id:req.body.courseId },{ $push: {lectures:newLecture._id } });
    // const course =  await Course.findById(req.body.courseId); 
    console.log("Lecture added successfully..");
    return res.status(200).json({status:"success", data :{newLecture}})
  
  


});