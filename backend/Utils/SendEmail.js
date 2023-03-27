require("dotenv").config();
//const sendgrid = require("@sendgrid/mail");
//const sib = require('sib-api-v3-sdk')
//sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const nodemailer = require("nodemailer");


const sendEmail = ({ to, from, subject, text }) => {
    const details = { to, from, subject, text };
    let mailTransporter = nodemailer.createTransport({
        pool: {
            maxConnections: 1,  // change this number to the maximum allowed by your SMTP server
            maxMessages: Infinity,
            rateDelta: 1000,
            rateLimit: 5
          },
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
