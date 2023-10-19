const { blogModel } = require("../models/blogModel");
const { userModel } = require("../models/userModel")

const userStats = async (req, res) => {
    const allUsersCount = await userModel.countDocuments();
    const allBlogsCount = await blogModel.countDocuments();
    res.status(200).send({
        success: true,
        message: "getted all user and blog",
        allUsersCount,
        allBlogsCount
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

const deleteUser = async (req, res) => {
    const { userId } = req.params;
    console.log(userId)
    try {
        if (!userId) {
            return res.status(401).send({
                message: "id is not exist"
            })
        }
        const user = await userModel.findByIdAndDelete(userId);
        res.status(200).send({
            success: true,
            message: "User deleted successfully",
            user
        })
    } catch (error) {
        res.status(501).send({
            message: error.message
        })
    }
}

const getMonthlyPost = async (req, res) => {
    try {
        const { year, month } = req.query;

        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);

        const monthlyBlogPosts = await blogModel.find({
            date: { $gte: startDate, $lte: endDate },
        });

        res.status(200).send({
            success: true,
            message: "monthlyBlogPosts getted successful",
            monthlyBlogPosts
        })
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}

module.exports = { userStats, getAllUsers, deleteUser, getMonthlyPost }