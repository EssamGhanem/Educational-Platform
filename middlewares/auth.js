
const appError = require('../utils/appError');
const httpStatus = require('../utils/httpStatus');
const asyncWrapper = require('./asyncWrapper');
const jwt = require("jsonwebtoken");

require('dotenv').config();


const verifyToken =  (req,res,next)=>{
  const token = req.header('Authorization').replace('Bearer ', '');

  // if token is missing 
  if(!token){
    const resError = appError.create("token is missig", 401,httpStatus.ERROR);
    return next(resError);
  }

  // verify token
  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  
  if(!decode){
    const resError = appError.create("error while token validating",401,httpStatus.ERROR);
    return next(resError);
  }
  
  req.user = decode;
  next();
};

const isInstructor = (req,res,next)=>{
  const user = req.user; 
  if( user.role != "Instructor" )
      {
        const error = appError.create("not authrized role",401,httpStatus.ERROR);
        next(error);
      }
      next();

};

const isStudnet = (req,res,next)=>{
  const user = req.user; 
  if( user.role != "Student" )
      {
        const error = appError.create("Not authrized role...X",401,httpStatus.ERROR);
        next(error);
      }
      next();

};





module.exports = {verifyToken,isInstructor,isStudnet};