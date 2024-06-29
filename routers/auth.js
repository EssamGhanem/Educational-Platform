const express = require("express");
const { register } = require("../controllers/Auth/register");
const { login } = require("../controllers/Auth/login");
const Router = express.Router();

Router.route('/register').post(register);
Router.route('/login').post(login);



module.exports =  Router;