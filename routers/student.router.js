const express = require("express");
const makeJoinRequest = require("../controllers/userControllers/studentController/makeCourseReq");
const { verifyToken, isStudnet } = require("../middlewares/auth");
const Router = express.Router();


Router.route('/').post(verifyToken, isStudnet, makeJoinRequest);


module.exports = Router;