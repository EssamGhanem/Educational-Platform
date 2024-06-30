const express = require("express");

const { verifyToken, isInstructor } = require("../middlewares/auth");
const {acceptReq , rejectReq} = require("../controllers/userControllers/instructorController/joinReq");
const getJoinRequests = require("../controllers/userControllers/instructorController/getJoinRequests");
const Router = express.Router();


Router.route('/acceptReq').patch(verifyToken, isInstructor, acceptReq);
Router.route('/rejectReq').get(verifyToken, isInstructor, rejectReq);
Router.route('/:id').get(verifyToken, isInstructor, getJoinRequests);



module.exports = Router;