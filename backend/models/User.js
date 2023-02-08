const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
    },
    passwordHash: {
        type: String,
        required: [true, "password must be provided"],
    },
    isVerified: {
        type: Boolean,
    },
    verificationString: {
        type: String,
    },
    passwordResetCode: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("User", userSchema);
