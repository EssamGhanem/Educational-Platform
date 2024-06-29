const Joi = require("joi");
const registerValidation = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  role:Joi.string().required()

});
module.exports = registerValidation;

