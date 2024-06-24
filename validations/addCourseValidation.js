const Joi = require("joi");
const addCourseValidation = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
});
module.exports = addCourseValidation;

