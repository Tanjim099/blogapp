// const { isLoggedIn } = require("../middlewares/authMiddleware.js")
const express = require("express");
const { register, login, getUserDetails, logout, getAllBlogById } = require("../controller/userController");
const { isLoggedIn } = require("../middlewares.js/authMiddleware");

const userRoute = express.Router();

// user register route
userRoute.post("/register", register)

// user login route
userRoute.post("/login", login)


userRoute.get("/loguot", logout)

// get user details route
userRoute.get("/me", isLoggedIn, getUserDetails)

//  get all blogs created by a specific user

userRoute.get("/:userId/blogs", isLoggedIn, getAllBlogById)
module.exports = { userRoute }