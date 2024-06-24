const express = require("express");
const Router = express.Router();
const addCourse = require("../controllers/courseControllers/addCourse");
const getAllCourses = require("../controllers/courseControllers/getAllCourses");
const deleteCourse = require("../controllers/courseControllers/deleteCourse");
const getSingleCourse = require("../controllers/courseControllers/getSingleCourse");
const updateCourse = require("../controllers/courseControllers/updateCourse");

Router.route("/")
.get(getAllCourses)
.post(addCourse);

Router.route("/:id")
.delete(deleteCourse)
.get(getSingleCourse)
.patch(updateCourse);

module.exports = Router;
