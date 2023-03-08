require("dotenv").config();
const User = require("../models/User")

const getAllUsers = {
    path: "/api/users",
    method: "get",
    handler: async (req, res) => {
        const {role} = req.query; 
        const users = await User.find({role})

        res.status(200).json({ users });
    },
};

const getUser = {
    path: "/api/users/:id",
    method: "get",
    handler: async (req, res) => {
        const { id: userID } = req.params;
        const user = await User.findOne({ _id: userID });
        if (!user) {
            return res.sendStatus(400);
        }
        res.status(200).json({ user });
    },
};

const deleteUser = {
    path: "/api/users/:id",
    method: "delete",
    handler: async (req, res) => {
        const { id: userID } = req.params;
        const user = await User.findOneAndDelete({ _id: userID });
        if (!user) {
            return res.sendStatus(400);
        }
        res.status(200).json({ user });
    },
};

module.exports = {
    getAllUsers,
    getUser,
    deleteUser,
   
};
