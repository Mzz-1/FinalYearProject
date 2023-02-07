const signUpRoute = require("./SignUpRoute");
const loginRoute = require("./LoginRoute");
const testEmailRoute = require("./Email");
//const {testEmailRoute} = require("./Nodemailer");

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
} = require("./EventsRoute");

const routes = [
    signUpRoute,
    loginRoute,
    testEmailRoute,
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
];

module.exports = routes;
