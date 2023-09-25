const express = require("express");
const { getBLog, createBlog } = require("../controller/blogController");

const blogRoute = express.Router();

blogRoute.get("/", getBLog);
blogRoute.post("/", createBlog);

module.exports = { blogRoute }