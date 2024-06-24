const express = require("express");
const addLecture = require("../controllers/lectures/addLecture");
const getCourseLectures = require("../controllers/lectures/getCourseLectures");
const updateLecture = require("../controllers/lectures/updateLecture");
const deleteLecture = require("../controllers/lectures/deleteLecture");
const Router = express.Router();

Router.route("/").post(addLecture);
Router.route("/:id").get(getCourseLectures).patch(updateLecture).delete(deleteLecture);

module.exports = Router;
