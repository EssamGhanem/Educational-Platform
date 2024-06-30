
const JoinRequest = require('../../../models/joinRequest.model');
const httpStatus = require('../../../utils/httpStatus');
const asyncWrapper = require('../../../middlewares/asyncWrapper');
const Course = require('../../../models/course.model');
const appError = require('../../../utils/appError');

const makeJoinRequest = asyncWrapper(async (req,res,next)=>{
  const {courseId, userId} = req.body;
  const oldReq = JoinRequest.findOne({course:courseId,student:userId});
  if(!oldReq){
    if(oldReq.state == "rejected")
      {
        const message = "Your request is rejected once by course Instructor..";
      }else if (oldReq.state == "accepted"){
        const message = "Your request is already accepted  You can find it in you courses";
      }
      else{
        const message = "Your request already sent and is pending.... ";
      }
    const error = appError.create(message,401 , httpStatus.FAILD);
    next(error);
  }


  
  const course = await Course.findById(courseId,{createdBy:true});
  const instructorId = course.createdBy;
  const joinReq =  new JoinRequest({
    student:userId,
    instructor:instructorId,
    course : courseId
  });

  // joinReq and send the res
  await joinReq.save();
  res.status(202).json({status:httpStatus.SUCCESS,message:"join Request submitted successfully..",data:{joinReq}})

});

module.exports = makeJoinRequest;