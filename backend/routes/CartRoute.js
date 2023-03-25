const Cart = require('../models/Cart')


const addToCart = {
    path: "/api/add-to-cart",
    method: "post",
    handler: async (req, res) => {
 const { userID, productID } = req.body;
        try {
            // Check if the cart already exists for the user
            let cart = await Cart.findOne({ userID: userID });

            // If the cart doesn't exist, create a new cart
            if (!cart) {
                cart = new Cart({ userID: userID });
                await cart.save();
            }

            // Make sure that the cart.items array is defined before calling "find"
            if (!cart.items) {
                cart.items = [];
            }

            // Check if the product is already in the cart
            const productExists = cart.items.find(
                (item) => item.productID.toString() === productID.toString()
            );

            // If the product is already in the cart, increase the quantity
            if (productExists) {
                productExists.quantity += 1;
            } else {
                // Otherwise, add the product to the cart
                cart.items.push({ productID: productID, quantity: 1 });
            }

            await cart.save();
            res.status(200).json({
                message: "Product added to cart successfully",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error adding product to cart" });
        }
    },
};

const getCartDetails = {
    path: "/api/cart/:id",
    method: "get",
    handler: async (req, res) => {
        const { id: userID } = req.params;
       
        const cart = await Cart.findOne({ userID: userID });
       
        if (!cart) {
            return res.sendStatus(400);
        }
        res.status(200).json({ cart });
    },
};

module.exports = {
    addToCart,
    getCartDetails
};
