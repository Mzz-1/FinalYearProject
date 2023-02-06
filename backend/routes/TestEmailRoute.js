
const sendEmail = require("../Utils/SendEmail");

const testEmailRoute = {
    path: "/api/test-email",
    method: "post",
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: "simply.art213@gmail.com",
                from: "prathammaharjan1939@gmail.com",
                subject: "Test email",
                text: "successful",
            });
            
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
};

//module.exports = testEmailRoute;