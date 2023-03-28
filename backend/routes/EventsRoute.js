require("dotenv").config();
const connectDB = require("../db/Connect");
const jwt = require("jsonwebtoken");
const connectCloudinary = require("../db/Cloudinary");
const cloudinary = require("cloudinary").v2;
const Event = require("../models/Events");
const multer = require("multer");
const sendEventsEmail = require("../Utils/SendInBlue");
const User = require("../models/User");

const upload = multer({ dest: "uploads/" });

const addEvents = {
    path: "/api/events",
    method: "post",
    handler: [
        upload.single("image"),
        async (req, res) => {
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
            const file = req.file;
            connectCloudinary();

            const upload = await cloudinary.uploader.upload(file.path, {
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
    ],
};

const sendEventMail = {
    path: "/api/sendEmail",
    method: "post",
    handler: async (req, res) => {
        const { name, location, startDate, endDate } = req.body;

        const users = await User.find({});
        console.log(users);
        users.map((user) => {
            if (user.role !== "admin" && user.isVerified === true) {
                console.log(user.username);
                sendEventsEmail({
                    to: user.email,

                    text: `
Dear ${user.username},

        I hope this message finds you doing well. I am writing to inform you about an exciting event that will be taking place soon. ${name}, will be held at ${location} from ${startDate} to ${endDate}.
                
        We would be delighted if you could join us for this celebration of creativity and art. Please visit our website at [Website URL] for more information and details about the event.
                
        Thank you for being a part of our community of artists, and we look forward to seeing you at the exhibition!
                
Best regards,
                
SimplyArt Team
            `,
                });
            }
        });
        res.status(200).json({ users });
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
    sendEventMail,
};
