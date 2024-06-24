const asyncWrapper = require('../../middlewares/asyncWrapper');
const Course = require('../../models/course.model');
const appError = require('../../utilities/appError');


module.exports = asyncWrapper(
  async (req,res,next)=>{
  const courses = await Course.find({},{title:true,price:true, description:true});
    return res.status(200).json({status:"success", data :{courses}})
  }
);