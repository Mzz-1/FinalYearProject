require("dotenv").config();
//const sendgrid = require("@sendgrid/mail");
//const sib = require('sib-api-v3-sdk')
const nodemailer = require("nodemailer");
//sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = ({ to, from, subject, text }) => {
    const details = { to, from, subject, text };
    let mailTransporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "simply.art213@outlook.com",
            pass: "simplyart#1234",
        },
    });

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("sent");
        }
    });
};

module.exports = sendEmail;
