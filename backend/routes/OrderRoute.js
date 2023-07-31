const Cart = require("../models/Cart");
const Product = require("../models/Products");
const Order = require("../models/Order");
const sendTEmail = require('../Utils/Email')
const User = require("../models/User");

const addOrder = {
    path: "/api/add-order",
    method: "post",
    handler: async (req, res) => {
        const { userId, products, totalAmount } = req.body;

        // Create a new order document
        const order = await Order.create({
          userId,
          products,
          totalAmount,
        });

      
        res.status(200).json("order");
      
        
    },
};

const getAllOrders = {
    path: "/api/orders",
    method: "get",
    handler: async (req, res) => {
       

        const order = await Order.find();

        if (!order) {
            return res.sendStatus(400);
        }
        res.status(200).json({ order });
    },
};

const getOrder = {
    path: "/api/order/:userId",
    method: "get",
    handler: async (req, res) => {
        const { userId } = req.params;

        const orders = await Order.find({ "userId": userId });
            res.status(200).json({ orders });
        
    },
};

const getArtistOrder = {
  path: "/api/artist-order/:artistName",
  method: "get",
  handler: async (req, res) => {
      const { artistName } = req.params;
      const orders = await Order.find({ "products.artist": artistName });
          res.status(200).json({ orders });
      
  },
};

module.exports = {
    addOrder,
    getAllOrders,
    getOrder,
    getArtistOrder
};
