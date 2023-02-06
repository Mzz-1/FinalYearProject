const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "email is required"],
    },
    artist: {
        type: String,
        required: [true, "password must be provided"],
    },
    category: {
        type: String,
        required: [true, "password must be provided"],
    },
    description: {
        type: String,
        required: [true, "password must be provided"],
    },
    quantity: {
        type: Number,
    },
    dimentions: {
        type: String,
        required: [true, "password must be provided"],
    },
    uploadedAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Product", productSchema);
