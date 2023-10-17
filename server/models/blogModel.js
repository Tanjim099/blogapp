const { default: mongoose } = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "infoTimesUserData",
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

const blogModel = mongoose.model("InfoTimes", blogSchema);
module.exports = { blogModel }