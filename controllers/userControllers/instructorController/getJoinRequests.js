const JoinRequest = require("../../../models/joinRequest.model");
const httpStatus = require("../../../utils/httpStatus");
const asyncWrapper = require("../../../middlewares/asyncWrapper");
const Course = require("../../../models/course.model");
const appError = require("../../../utils/appError");
const User = require("../../../models/user.model");

const getJoinRequests = asyncWrapper(async(req,res,next)=>{
  const instructorId = req.params.id;
  const joinRequests = await JoinRequest.find({instructor:instructorId});
  if(!joinRequests)
    {
      appError.create("there no join-request...");
    }

    res.status(202).json({stats:httpStatus.SUCCESS,data:{joinRequests}});
});

module.exports = getJoinRequests;