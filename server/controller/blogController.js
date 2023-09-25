
// get blog

const { blogModel } = require("../models/blogModel")

const getBLog = async (req, res) => {
    try {
        const getAllBlog = await blogModel.find();
        res.status(200).send({
            success: true,
            message: "getBlog is working",
            getAllBlog
        })
    } catch (error) {
        console.log(error.message)
    }
}


// create blog

const createBlog = async (req, res) => {
    try {
        const { title, description, content, img } = req.body;
        if (!title || !description || !content || !img) {
            return res.status(300).send({
                message: "All fields are required"
            })
        }
        const newBlog = await blogModel(req.body)
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

module.exports = { getBLog, createBlog }