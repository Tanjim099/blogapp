const express = require("express");
const { getBLog, createBlog, getSingleBlog, deleteBlog } = require("../controller/blogController");
const { isLoggedIn } = require("../middlewares.js/authMiddleware");

const blogRoute = express.Router();

blogRoute.get("/", getBLog);
blogRoute.post("/", isLoggedIn, createBlog);
blogRoute.delete("/delete/:blogId", deleteBlog)
blogRoute.get("/:blogId", isLoggedIn, getSingleBlog)

module.exports = { blogRoute }