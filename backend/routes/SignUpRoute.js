require("dotenv").config();
const connectDB = require("../db/Connect");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { uuid, v4 } = require("uuid");
const sendEmail = require('../Utils/SendEmail')

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

        const verificationString = v4();

        const startingInfo = {
            admin: "",
        };

        const result = await User.create({
            email,
            passwordHash,
            info: startingInfo,
            isVerified: false,
            verificationString,
        });

        const { insertedId } = result;

        try {
            await sendEmail({
                to: email,
                from: "simply.art213@outlook.com",
                subject: "Please verify your email",
                text: `
                    Thank you for signing up! To verify your email,click here:
                    http://localhost:3000/verify-email/${verificationString}
                `,
            });
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }

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
