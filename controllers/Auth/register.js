const bcrypt = require("bcrypt");
const registerValidation = require("../../validations/registerValidation");
const User = require("../../models/user.model");
const generateJWT = require("../../utils/generateJWT");
const httpStatus = require("../../utils/httpStatus");
const asyncWrapper = require("../../middlewares/asyncWrapper")

const register = asyncWrapper(async (req, res, next) => {
  var { userName, email, password, role } = req.body;
  //check req body
  const { error } = registerValidation.validate(req.body);
  if (error) {
    const resError = appError.create("please enter all data! ", 404, "failed");
    return next(resError);
  }

  // check if email aready exists
  const existUser = await User.findOne({ email: email });
  if (existUser) {
    const resError = appError.create("Email aready exist", 401, "failed");
    return next(resError);
  }

  // make new user
  const hashedPassword =  await bcrypt.hash( password , 10 );
  const newUser = new User({ userName, email, password :hashedPassword, role });

  //generate token
  const userToken = await generateJWT({userName, email,role});
  newUser.token = userToken;
  // save user and return res
  await newUser.save();

  res.status(200).json({status:httpStatus.SUCCESS,data:{user:newUser}});


});



module.exports = { register };
