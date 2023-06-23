const signUpRoute = require("./SignUpRoute");
const loginRoute = require("./LoginRoute");
const testEmailRoute = require("./Email");
const verifyEmailRoute = require("./VerifyEmailRoute");
const forgotPasswordRoute = require("./ForgotPasswordRoute");
const resetPasswordRoute = require("./ResetPasswordRoute");
const khaltiPayment = require("./Khalti");
const {addOrder,getAllOrders,getOrder} = require("./OrderRoute");

const { getAllUsers, getUser, deleteUser, updateUser } = require("./UserRoute");

const {
    addBiography,
    updateBiography,
    getAllArtists,
    getArtist,
    addArtistEvent,
    getArtistExhibitions,
    getBiography,
    deleteExhibition,
    updateArtistEvent,
    getExhibitions,
    getArtistProduct
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

const {
    addToCart,
    getCartDetails,
    getCartProductDetails,
    deleteCartProduct,
    deleteCart
} = require("./CartRoute");

const { addDelivery, getDeliveryDetails } = require("./DeliveryRoute");

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
    updateUser,

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
    updateArtistEvent,
    getBiography,
    deleteExhibition,
    getExhibitions,
    getArtistProduct,

    addToCart,
    getCartDetails,
    getCartProductDetails,
    deleteCartProduct,
    deleteCart,

    addDelivery,
    getDeliveryDetails,

    addOrder,
    getAllOrders,
    getOrder,

    testEmailTemplate,

    khaltiPayment,
];

module.exports = routes;
