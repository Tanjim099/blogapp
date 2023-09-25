const { default: mongoose } = require("mongoose");

require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/newblogdata");
        console.log("DataBase connected successfully")
    } catch (error) {
        console.log("Failed to connect")
    }
}

module.exports = { connectDB }