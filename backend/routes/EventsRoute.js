require("dotenv").config();
const connectDB = require("../db/Connect");
const jwt = require("jsonwebtoken");
const connectCloudinary = require("../db/Cloudinary");
const cloudinary = require("cloudinary").v2;
const Event = require("../models/Events");

const addEvents = {
    path: "/api/events",
    method: "post",
    handler: async (req, res) => {
        const {
            name,
            place,
            location,
            image,
            startDate,
            endDate,
            startTime,
            endTime,
        } = req.body;
        connectCloudinary();
      
        console.log(image);
    
        const upload = await cloudinary.uploader.upload(image, {
            folder: "events",
        });

        //const url = cloudinary.url(name);
        console.log("node 1");

        const event = await Event.create({
            name,
            place,
            location,
            url: upload.secure_url,
            startDate,
            endDate,
            startTime,
            endTime,
        });
        console.log("node 2");
        res.sendStatus(200);
    },
};

const getAllEvents = {
    path: "/api/events",
    method: "get",
    handler: async (req, res) => {
        const event = await Event.find({});

        res.status(200).json({ event });
    },
};

const getEvent = {
    path: "/api/events/:id",
    method: "get",
    handler: async (req, res) => {
        const { id: eventID } = req.params;
        const event = await Event.findOne({ _id: eventID });
        if (!event) {
            return res.sendStatus(400);
        }
        res.status(200).json({ event });
    },
};

const updateEvents = {
    path: "/api/events/:id",
    method: "patch",
    handler: async (req, res) => {
        const { id: eventID } = req.params;

        const event = await Event.findOneAndUpdate({ _id: eventID }, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: true,
        });

        if (!event) {
            return res.status(404);
        }

        res.status(200).json({ event });
    },
};

const deleteEvent = {
    path: "/api/events/:id",
    method: "delete",
    handler: async (req, res) => {
        const { id: eventID } = req.params;
        const event = await Event.findOneAndDelete({ _id: eventID });
        if (!event) {
            return res.sendStatus(400);
        }
        res.status(200).json({ event });
    },
};

module.exports = {
    addEvents,
    getAllEvents,
    getEvent,
    updateEvents,
    deleteEvent,
};
