const Joi = require("joi");
const addLectureValidation = Joi.object({
  title: Joi.string().required(),
  link: Joi.string().required(),
  courseId: Joi.string().required(),
});
module.exports = addLectureValidation;

