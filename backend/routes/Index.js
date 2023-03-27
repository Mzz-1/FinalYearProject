const signUpRoute = require("./SignUpRoute");
const loginRoute = require("./LoginRoute");
const testEmailRoute = require("./Email");
const verifyEmailRoute = require("./VerifyEmailRoute");
const forgotPasswordRoute = require("./ForgotPasswordRoute");
const resetPasswordRoute = require("./ResetPasswordRoute");

const { getAllUsers, getUser, deleteUser } = require("./UserRoute");

const {
    addBiography,
    updateBiography,
    getAllArtists,
    getArtist,
    addArtistEvent,
    getArtistExhibitions,
    getBiography,
} = require("./ArtistInfoRoutes");

const {
    addProducts,
    updateProducts,
    getAllProducts,
    getProduct,
    deleteProduct,
} = require("./ProductRoute");

const {
    addEvents,
    getAllEvents,
    getEvent,
    updateEvents,
    deleteEvent,
    sendEventMail,
} = require("./EventsRoute");

const { addToCart, getCartDetails } = require("./CartRoute");

const routes = [
    signUpRoute,
    verifyEmailRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    loginRoute,
    testEmailRoute,
    getAllUsers,
    getUser,
    deleteUser,
    addProducts,
    updateProducts,
    getAllProducts,
    getProduct,
    deleteProduct,
    addEvents,
    getAllEvents,
    getEvent,
    updateEvents,
    deleteEvent,
    sendEventMail,
    addBiography,
    updateBiography,
    getAllArtists,
    getArtist,
    addArtistEvent,
    getArtistExhibitions,
    getBiography,
    addToCart,
    getCartDetails,
];

module.exports = routes;
