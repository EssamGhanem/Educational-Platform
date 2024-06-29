const asyncWrapper = require("../../middlewares/asyncWrapper");
const Lectuer = require("../../models/lecture.model");
const appError = require("../../utils/appError");
const httpStatus = require("../../utils/httpStatus");

module.exports = asyncWrapper(async (req, res, next) => {
  const lectureId = req.params.id;
  const lecture = await Lectuer.findById(lectureId);

  if (!lecture) {
    const error = appError.create(
      "Cant find the Lecture ...!",
      404,
      httpStatus.FAILD
    );
    return next(error);
  }
  await Lectuer.updateOne({ _id: lectureId }, req.body);

  const updatedLecture = await Lectuer.findById(lectureId);

  return res.status(200).json({ status: "success", data: { updatedLecture } });
});
