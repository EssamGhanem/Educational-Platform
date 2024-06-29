const User = require("../../models/user.model");
const bcrypt = require("bcrypt");
const generateJWT = require("../../utils/generateJWT");
const httpStatus = require("../../utils/httpStatus");
const asyncWrapper = require("../../middlewares/asyncWrapper");
const loginValidation = require("../../validations/loginValidation");
const appError = require('../../utils/appError')



const login = asyncWrapper(async(req,res,next)=>{
  
  
  //check req body
  const {error} = loginValidation.validate(req.body);
  if (error) {
    const resError = appError.create("please enter all data! ", 404,  httpStatus.FAILD);
    return next(resError);
  }
  const  {email , password } = req.body;
  
  const user = await User.findOne({email:email});
  
  if(!user)
    {
      const resError = appError.create("can not find a the user with this email", 402,  httpStatus.FAILD);
      return next(resError);
      console.log(" dont have user ");
    }
    console.log(user);

    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
      const resError = appError.create("wrong password", 401, httpStatus.FAILD);
      return next(resError);
    }

    const userToken = await generateJWT({userName:user.userName, email:user.email, role: user.role });
    user.token = userToken;
    await user.save();
    res.status(201).json({status:httpStatus.SUCCESS , message : " user Logged  in successfully ...!", data:{token:user.token}});
});



module.exports = {login};