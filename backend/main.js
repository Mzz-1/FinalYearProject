require("dotenv").config();
const path = require("path");
const express = require("express");
const routes = require("./routes/Index");
const connectDB = require("./db/Connect");

const app = express();

// middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json());

const port = process.env.PORT || 5000;

routes.forEach((route) => {
    app[route.method](route.path, route.handler);
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
