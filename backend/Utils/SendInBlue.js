require("dotenv").config();
const email = require("sib-api-v3-sdk");
const client = email.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;


const sendEventsEmail = async ({ to, from, subject, text }) => {
    const details = { to, from, subject, text };
   
        let mail = new email.TransactionalEmailsApi();
        try {
            await mail.sendTransacEmail({
                subject: "Reminder: Don't miss our upcoming event!",
                sender: {
                    name: "SimplyArt Team",
                    email: "simply.art213@gmail.com",
                },
                replyTo: {
                    email: "simply.art213@gmail.com",
                },
                to: [{ email: `${to}` }],
                htmlContent:
                    `<html><body style="width:500px; text-align:left;  font-size: 16px; color: #333; font-family: Arial, sans-serif;"><pre>${text}</pre></body></html>`,
                params: { bodyMessage: "Made just for you!" },
            });
          
        } catch (err) {
            console.log(err);
           
        }
    

};

module.exports = sendEventsEmail;
