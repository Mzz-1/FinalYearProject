require("dotenv").config();
const connectDB = require("../db/Connect");
const jwt = require("jsonwebtoken");
const connectCloudinary = require("../db/Cloudinary");
const cloudinary = require("cloudinary").v2;
const { Artist, Exhibition } = require("../models/Artist");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const addBiography = {
    path: "/api/biography",
    method: "post",
    handler: [
        upload.single("image"),
        async (req, res) => {
            const { userID, name, aboutContent, biography } = req.body;
            const file = req.file;
            connectCloudinary();

            const upload = await cloudinary.uploader.upload(file.path, {
                folder: "artist",
            });

            //const url = cloudinary.url(name);
            console.log("node 1");
            console.log(name, aboutContent, biography);

            const artist = await Artist.create({
                userID,
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

const getBiography = {
    path: "/api/biography/:id",
    method: "get",
    handler: async (req, res) => {
        const { id: userID } = req.params;
        const artist = await Artist.findOne({ _id: userID });
        // const artist = await Artist.findOne({ userID: userID });
        if (!artist) {
            return res.sendStatus(400);
        }
        if (!artist) {
            return res.sendStatus(400);
        }
        res.status(200).json({ artist });
    },
};

const addArtistEvent = {
    path: "/api/add-artist-event",
    method: "post",
    handler: [
        upload.single("image"),
        async (req, res) => {
            const { userID, name, startDate, endDate, location } = req.body;
            const file = req.file;
            connectCloudinary();

            const upload = await cloudinary.uploader.upload(file.path, {
                folder: "artist events",
            });

            //const url = cloudinary.url(name);
            console.log("node 1");
            console.log(name, startDate, endDate, location);

            const exhibition = await Exhibition.create({
                name,
                startDate,
                endDate,
                location,
                image: upload.secure_url,
            });

            const artist = await Artist.findOne({ userID });
            artist.exhibitions.push(exhibition);
            await artist.save();
            console.log("node 2");
            res.sendStatus(200);
        },
    ],
};

const getAllArtists = {
    path: "/api/artists",
    method: "get",
    handler: async (req, res) => {
        const artist = await Artist.find({});

        res.status(200).json({ artist });
    },
};

const getArtistExhibitions = {
    path: "/api/artist-exhibitions/:id",
    method: "get",
    handler: async (req, res) => {
        const { id: artistID } = req.params;
        const artist = await Artist.findOne({ name: artistID }).populate(
            "exhibitions"
        );
        const exhibitions = artist.exhibitions;

        res.status(200).json({ exhibitions });
    },
};

const getArtist = {
    path: "/api/artist/:id",
    method: "get",
    handler: async (req, res) => {
        const { id: userID } = req.params;
        const artist = await Artist.findOne({ userID: userID });
        if (!artist) {
            return res.sendStatus(400);
        }
        res.status(200).json({ artist });
    },
};

const updateBiography = {
    path: "/api/biography/:id",
    method: "patch",
    handler: [
        upload.single("image"),
        async (req, res) => {
            const { id: bioID } = req.params;
            const { userID, name, aboutContent, biography } = req.body;
            console.log(name, aboutContent, biography);
            const file = req.file;
            connectCloudinary();

            const upload = await cloudinary.uploader.upload(file.path, {
                folder: "artist",
            });

            console.log(bioID);

            const bio = await Artist.findOneAndUpdate(
                { userID: bioID },
                {
                    name,
                    aboutContent,
                    biography,
                    profilePhoto: upload.secure_url,
                },
                {
                    new: true,
                    runValidators: true,
                    useFindAndModify: false,
                }
            );

            if (!bio) {
                return res.status(404);
            }

            res.status(200).json({ bio });
        },
    ],
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
    updateBiography,
    getAllArtists,
    getArtist,
    getArtistExhibitions,
    addArtistEvent,
    getBiography,
};
