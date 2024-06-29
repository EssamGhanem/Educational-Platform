const express = require("express");
const Router = express.Router();
const addCourse = require("../controllers/courseControllers/addCourse");
const getAllCourses = require("../controllers/courseControllers/getAllCourses");
const deleteCourse = require("../controllers/courseControllers/deleteCourse");
const getSingleCourse = require("../controllers/courseControllers/getSingleCourse");
const updateCourse = require("../controllers/courseControllers/updateCourse");
const getCourseLectures =require('../controllers/courseControllers/getCourseLectures');

Router.route("/")
.get(getAllCourses)
.post(addCourse);

Router.route("/:id")
.delete(deleteCourse)
.get(getSingleCourse)

.patch(updateCourse);

Router.route('/lectures/:id').get(getCourseLectures);

module.exports = Router;
