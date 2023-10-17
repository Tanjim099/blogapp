const express = require("express");
const { userStats, getAllUsers } = require("../controller/miscellaneousController");

const miscRoutes = express.Router();

miscRoutes.get("/stats/users", userStats);
miscRoutes.get("/stats/allusers", getAllUsers)

module.exports = { miscRoutes }