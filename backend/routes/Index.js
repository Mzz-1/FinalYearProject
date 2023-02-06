const signUpRoute = require("./SignUpRoute");
const loginRoute = require("./LoginRoute");
const testEmailRoute = require("./Email");
const {
    addProducts,
    updateProducts,
    getAllProducts,
    getProduct,
} = require("./ProductRoute");
const addEventsRoute = require("./EventsRoute");

const routes = [
    signUpRoute,
    loginRoute,
    testEmailRoute,
    addProducts,
    updateProducts,
    getAllProducts,
    getProduct,
    addEventsRoute,
];

module.exports = routes;
