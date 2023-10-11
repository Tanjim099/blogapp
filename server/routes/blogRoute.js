const express = require("express");
const { getBLog, createBlog, getSingleBlog } = require("../controller/blogController");
const { isLoggedIn } = require("../middlewares.js/authMiddleware");

const blogRoute = express.Router();

blogRoute.get("/", isLoggedIn, getBLog);
blogRoute.post("/", isLoggedIn, createBlog);
blogRoute.get("/:blogId", isLoggedIn, getSingleBlog)

module.exports = { blogRoute }