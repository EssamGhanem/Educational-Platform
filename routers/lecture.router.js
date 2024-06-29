const express = require("express");
const addLecture = require("../controllers/lectures/addLecture");

const updateLecture = require("../controllers/lectures/updateLecture");
const deleteLecture = require("../controllers/lectures/deleteLecture");
const Router = express.Router();

Router.route("/").post(addLecture);
Router.route("/:id").patch(updateLecture).delete(deleteLecture);

module.exports = Router;
