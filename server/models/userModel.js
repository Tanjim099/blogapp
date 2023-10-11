const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');
const crypto = require('crypto')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
}, {
    timestamps: true
})


userSchema.methods = {
    generateJWTToken: function () {
        return jwt.sign(
            { id: this._id, role: this.role, email: this.email },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY
            }
        )
    },
    generatePasswordToken: async function () {
        const resetToken = crypto.randomBytes(20).toString('hex');

        this.forgotPasswordToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex')
        this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000  // 15 min from now

        return resetToken
    }
}
const userModel = mongoose.model("infoTimesUserData", userSchema);

module.exports = { userModel }