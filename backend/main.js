require("dotenv").config();
require("express-async-errors");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const routes = require("./routes/Index");
const connectDB = require("./db/Connect");
const notFound = require("./middleware/NofFound");
const errorHandlerMiddleware = require("./middleware/ErrorHandler");
const router = express.Router();
const cors = require("cors");
const multer = require("multer");
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

const app = express();

// middleware
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));



routes.forEach((route) => {
    app[route.method](route.path, route.handler);
});

app.use(notFound);
app.use(errorHandlerMiddleware);
app.use(
    fileUpload({
        useTempFiles: true,
    })
);

const port = process.env.PORT || 5000;

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
