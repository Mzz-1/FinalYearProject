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
    deleteExhibition
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

const { addToCart, getCartDetails, getCartProductDetails } = require("./CartRoute");

const { addDelivery } = require("./DeliveryRoute");

const testEmailTemplate = require("./Template");

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
   
    addBiography,
    updateBiography,
    getAllArtists,
    getArtist,
    addArtistEvent,
    getArtistExhibitions,
    getBiography,
    deleteExhibition,
    addToCart,
    getCartDetails,
    getCartProductDetails,
    addDelivery,
    testEmailTemplate,
];

module.exports = routes;
