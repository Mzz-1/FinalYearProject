require("dotenv").config();
const connectDB = require("../db/Connect");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const signUpRoute = {
    path: "/api/signup",
    method: "post",
    handler: async (req, res) => {
        const { email, password } = req.body;
        const db = connectDB(process.env.MONGO_URI); // left
        const user = await User.findOne({ email });

        if (user) {
            return res.sendStatus(409);
        }
        const passwordHash = await bcrypt.hash(password, 10);

        const startingInfo = {
            admin: "",
        };

        const result = await User.create({
            email,
            passwordHash,
            info: startingInfo,
            isVerified: false,
        });

        const { insertedId } = result;

        jwt.sign(
            {
                id: insertedId,
                email,
                info: startingInfo,
                isVerified: false,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2d",
            },
            (err, token) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.status(200).json({ token });
            }
        );
    },
};

module.exports = signUpRoute;
