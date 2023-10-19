const express = require("express");
const { userStats, getAllUsers, deleteUser, getMonthlyPost } = require("../controller/miscellaneousController");

const miscRoutes = express.Router();

miscRoutes.get("/stats/users", userStats);
miscRoutes.get("/stats/allusers", getAllUsers);
miscRoutes.delete("/stats/user/delete/:userId", deleteUser);
miscRoutes.get("/stats/blog/monthly", getMonthlyPost)

module.exports = { miscRoutes }