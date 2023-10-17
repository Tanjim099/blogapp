const { blogModel } = require("../models/blogModel");
const { userModel } = require("../models/userModel")

const userStats = async (req, res) => {
    const allUsersCount = await userModel.countDocuments();
    const allUsers = await userModel.find()
    const allBlogsCount = await blogModel.countDocuments();
    res.status(200).send({
        success: true,
        message: "getted all user and blog",
        allUsersCount,
        allBlogsCount,
        allUsers
    })
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(200).send({
            success: true,
            message: "getted all registered users",
            allUsers
        })
    } catch (error) {
        res.status(501).send({
            message: error
        })
    }
}

module.exports = { userStats, getAllUsers }