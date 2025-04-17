const express=require("express");
const { home, register } = require("../Controllers/auth-controllers");

const router=express.Router();

router.route("/").get(home)

router.route("/register").get(register)


module.exports= router;