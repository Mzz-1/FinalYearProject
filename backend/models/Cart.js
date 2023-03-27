const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
      type: String,
      required: [true, "Name must be provided"],
  },
  artist: {
      type: String,
      // required: [true, "Artist Name must be provided"],
  },
  category: {
      type: String,
      required: [true, "Category must be provided"],
  },
  description: {
      type: String,
      required: [true, "Dimentions must be provided"],
  },
  quantity: {
      type: Number,
  },
  price: {
      type: Number,
      required: [true, "Price must be provided"],
  },
  dimensions: {
      type: String,
      required: [true, "Dimentions must be provided"],
  },
  url: {
      type: String,
      required: [true, "Image must be provided"],
  },
  uploadedAt: {
      type: Date,
      default: Date.now(),
  },
});

const cartSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);