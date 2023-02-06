require("dotenv").config();
const connectDB = require("../db/Connect");
const jwt = require("jsonwebtoken");
const Product = require("../models/Events");

const addEventsRoute = {
    path: "/api/events",
    method: "post",
    handler: async (req, res) => {
        const {
            name,
            venue,
            location,
            description,
            startDate,
            endDate,
            startTime,
            endTime,
        } = req.body;

        await connectDB(process.env.MONGO_URI);
        const user = await Product.create({
            name,
            venue,
            location,
            description,
            startDate,
            endDate,
            startTime,
            endTime,
        });
        res.sendStatus(200);
    },
};

const updateEventsRoute =()=>{
    path:'api/'

}

module.exports = addEventsRoute;
