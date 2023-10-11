
// get blog

const { blogModel } = require("../models/blogModel")

const getBLog = async (req, res) => {
    try {
        const getAllBlog = await blogModel.find().populate("author")
        res.status(200).send({
            success: true,
            message: "getBlog is working",
            getAllBlog
        })
    } catch (error) {
        console.log(error.message)
    }
}

const getSingleBlog = async (req, res) => {
    const { blogId } = req.params;

    try {
        const blog = await blogModel.findById(blogId).populate('author');
        res.status(200).send({
            success: true,
            message: "getted single blog",
            blog
        })
    } catch (error) {
        res.status(404).send({
            message: error,
        })
    }
}


// create blog

const createBlog = async (req, res) => {
    try {
        const { title, description, content, img, userId } = req.body;
        if (!title || !description || !content) {
            return res.status(300).send({
                message: "All fields are required"
            })
        }
        const newBlog = await blogModel({
            title,
            description,
            content,
            img,
            author: userId
        })
        await newBlog.save()
        res.status(200).send({
            success: true,
            message: "created successfully",
            newBlog
        })
    } catch (error) {
        res.status(501).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = { getBLog, getSingleBlog, createBlog }