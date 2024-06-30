const JoinRequest = require("../../../models/joinRequest.model");
const httpStatus = require("../../../utils/httpStatus");
const asyncWrapper = require("../../../middlewares/asyncWrapper");
const Course = require("../../../models/course.model");
const appError = require("../../../utils/appError");
const User = require("../../../models/user.model");

const acceptReq = asyncWrapper(async (req, res, next) => {
  const { joinReqId } = req.body;
  if (!joinReqId) {
    const error = appError.create(
      "please send joinReqId with req body..",
      404,
      httpStatus.ERROR
    );
    next(error);
  }
  console.log("here");
  const joinRequest = await JoinRequest.findById(joinReqId);
  if (!joinRequest) {
    const error = appError.create(
      "cant find the request",
      404,
      httpStatus.ERROR
    );
    next(error);
  }
  await joinRequest.updateOne({ state: "accepted" });
  const user = await User.findOneAndUpdate(
    { _id: joinRequest.student },
    { $push: { courses: joinRequest.course } }
  );
  res.status(202).json({ status: httpStatus.SUCCESS, data: { joinRequest } });
});

const rejectReq = asyncWrapper(async (req, res, next) => {
  const { joinReqId } = req.body;
  if (!joinReqId) {
    const error = appError.create(
      "please send joinReqId with req body..",
      404,
      httpStatus.ERROR
    );
    next(error);
  }

  const joinRequest = await JoinRequest.findById(joinReqId);
  if (!joinRequest) {
    const error = appError.create(
      "cant find the request",
      404,
      httpStatus.ERROR
    );
    next(error);
  }
  await joinRequest.updateOne({ state: "rejected" });
});

module.exports = {acceptReq, rejectReq};
