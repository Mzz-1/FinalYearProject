require("dotenv").config();
const connectDB = require("../db/Connect");
const jwt = require("jsonwebtoken");
const connectCloudinary = require("../db/Cloudinary");
const cloudinary = require("cloudinary").v2;
const { Artist } = require("../models/Artist");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const addBiography = {
    path: "/api/biography",
    method: "post",
    handler: [
        upload.single("image"),
        async (req, res) => {
            const { name, aboutContent, biography } = req.body;
            const file = req.file;
            connectCloudinary();

            const upload = await cloudinary.uploader.upload(file.path, {
                folder: "artist",
            });

            //const url = cloudinary.url(name);
            console.log("node 1");
            console.log(name, aboutContent, biography);

            const artist = await Artist.create({
                name,
                aboutArtist: aboutContent,
                biography,
                profilePhoto: upload.secure_url,
            });
            console.log("node 2");
            res.sendStatus(200);
        },
    ],
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

const updateBiography = {
    path: "/api/biography/:id",
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
    addBiography,
};
