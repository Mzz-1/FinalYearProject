require("dotenv").config();
const jwt = require("jsonwebtoken");
const connectDB = require("../db/Connect");
const User = require("../models/User");

const verifyEmailRoute = {
    path: "/api/verify-email",
    method: "put",
    handler: async (req, res) => {
        try{
        const { verificationString } = req.body;
        await connectDB(process.env.MONGO_URI);
        const user = User.findOne({ verificationString });

        if (!user) {
            return res.status(401).json({ message: "The email" });
        }
        
        const { _id: userID, email } = user;

        console.log(user);

        await User.findOneAndUpdate(
            { _id: userID },
            {
                $set: { isVerified: true },
            },
            {
              
                useFindAndModify: false,
            }
        );

        jwt.sign(
            { userID, email, isVerified: true },
            process.env.JWT_SECRET,
            { expiresIn: "2d" },
            (err, token) => {
                if (err) {
                    return res.sendStatus(500);
                }
                res.status(200).json({ token });
            }
       
        );
    }catch(err){
        console.log(err)
    }
    },



};

module.exports = verifyEmailRoute;
