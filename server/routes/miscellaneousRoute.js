const express = require("express");
const { userStats, getAllUsers, deleteUser } = require("../controller/miscellaneousController");

const miscRoutes = express.Router();

miscRoutes.get("/stats/users", userStats);
miscRoutes.get("/stats/allusers", getAllUsers);
miscRoutes.delete("/stats/user/delete/:userId", deleteUser);

module.exports = { miscRoutes }