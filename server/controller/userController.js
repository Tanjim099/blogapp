const { userModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const fs = require('fs/promises');
// const cloudinary = require('cloudinary')
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const { blogModel } = require("../models/blogModel");


const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true
}

// user register controller
const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    console.log(req.body)
    if (!name || !email || !password) {
        return res.status(300).send({
            message: "All fields are required"
        })
    }
    try {

        const userExists = await userModel.findOne({ email });

        if (userExists) {
            return next(new AppError("Email already exists", 400))
        }
        const hashedPassword = await bcrypt.hash(password, 12) // hash password
        // const newUser = await userModel.create({ ...req.body, password: hashedPassword })
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            // avatar:{
            //     public_id: email,
            //     secure_url:'https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg'
            // }
        })
        // if(req.file){
        //     await cloudinary.v2.uploader.destory(newUser.avatar.public_id);

        //     const result = await cloudinary.v2.uploader.upload(req.file.path, {
        //         folder: "blog",
        //         width: 250,
        //         heigth: 250,
        //         gravity: 'faces',
        //         crop: 'fill'
        //     });

        //     if(result){
        //         newUser.avatar.public_id = result.public_id,
        //         newUser.avatar.secure_url = result.secure_url;

        //         // remove file from local server
        //         fs.rm(`uploads/${req.file.filename}`)
        //     }
        // }
        await newUser.save();

        const token = await newUser.generateJWTToken();
        console.log(token)
        res.cookie('jwt', token, cookieOptions);
        newUser.password = undefined;
        res.status(200).send({
            success: true,
            message: "register successfully",
            newUser
        })
    } catch (error) {
        res.status(501).send({
            success: false,
            message: error.message
        })
    }
}

// user login controller
const login = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body)
    if (!email || !password) {
        return next(new AppError("All fields are required", 400))
    }
    try {
        const userData = await userModel.findOne({ email }).select('+password');
        const result = await bcrypt.compare(password, userData.password)
        if (!result) {
            return next(new AppError("Email or password do not match", 400))
        }
        const token = await userData.generateJWTToken();
        userData.password = undefined
        // console.log(token)
        res.cookie('token', token, cookieOptions)

        res.status(201).json({
            success: true,
            message: "User logged in successfully",
            userData,
            token
        })
    } catch (error) {
        res.status(501).send({
            success: false,
            message: error.message,
        })
    }
}


const logout = (req, res) => {
    res.cookie('token', null, {
        secure: true,
        maxAge: 0,
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: 'User logged out successfully'
    })
}

// get user details controller

const getUserDetails = async (req, res) => {
    // const { token } = req.body
    // try {
    //     const { userId } = jwt.verify(token, process.env.JWT_SECRET)
    //     const userDetails = await UserModel.findOne({ _id: userId })
    //     res.status(200).send({
    //         success: true,
    //         msg: "user data geted successfully",
    //         userDetails
    //     })
    // } catch (error) {
    //     res.status(501).send({
    //         success: false,
    //         msg: error.message
    //     })
    // }

    const user = await userModel.findById(req.user.id)
    // .populate('blog')


    res.status(200).json({
        success: true,
        message: "User details",
        user
    })
}

//  get all blogs created by a specific user

const getAllBlogById = async (req, res) => {
    const { userId } = req.params

    try {
        const blogs = await blogModel.find({ author: userId });
        res.status(200).json({
            success: true,
            message: "getted all blogs",
            blogs
        })
    } catch (error) {
        res.status(500).json({
            message: error,
        })
    }
}
module.exports = { register, login, logout, getUserDetails, getAllBlogById }