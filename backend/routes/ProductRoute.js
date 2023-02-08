require("dotenv").config();
const connectDB = require("../db/Connect");
const jwt = require("jsonwebtoken");
const Product = require("../models/Products");

const getAllProducts = {
    path: "/api/products",
    method: "get",
    handler: async (req, res) => {
        const product = await Product.find({});

        res.status(200).json({ product });
    },
};

const getProduct = {
    path: "/api/products/:id",
    method: "get",
    handler: async (req, res) => {
        const { id: productID } = req.params;
        const product = await Product.findOne({ _id: productID });
        if (!product) {
            return res.sendStatus(400);
        }
        res.status(200).json({ product });
    },
};

const addProducts = {
    path: "/api/products",
    method: "post",
    handler: async (req, res) => {
        const { name, artist, category, description, quantity, dimentions } =
            req.body;
        const product = await Product.create({
            name,
            artist,
            category,
            description,
            quantity,
            dimentions,
        });
        res.sendStatus(200);
    },
};

const updateProducts = {
    path: "/api/products/:id",
    method: "patch",
    handler: async (req, res) => {
        const { id: productID } = req.params;

        const product = await Product.findOneAndUpdate(
            { _id: productID },
            req.body,
            {
                new: true,
                runValidators: true,
                useFindAndModify: true,
            }
        );

        if (!product) {
            return res.status(404);
        }

        res.status(200).json({ product });
    },
};

const deleteProduct = {
    path: "/api/products/:id",
    method: "delete",
    handler: async (req, res) => {
        const { id: productID } = req.params;
        const product = await Product.findOne({ _id: productID });
        if (!product) {
            return res.sendStatus(400);
        }
        res.status(200).json({ product });
    },
};

module.exports = {
    addProducts,
    updateProducts,
    getAllProducts,
    getProduct,
    deleteProduct,
};
