require("dotenv").config();
const email = require("sib-api-v3-sdk");
const client = email.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

//const SibApiV3Sdk = require('sib-api-v3-sdk');
//const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = 'YOUR_API_KEY';

//const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Create a new email message
//const sendSmtpEmail = new email.SendSmtpEmail();

// Set the template ID
//sendSmtpEmail.templateId = TEMPLATE_ID;

// Set the recipient email address
//sendSmtpEmail.to = [{ email: 'recipient@example.com' }];

// Send the email
const toEmail = "example@example.com";
const username = "John";
const name = "Art Exhibition";
const location = "Art Gallery";
const startDate = "01/04/2023";
const endDate = "05/04/2023";
const image = "https://res.cloudinary.com/djuzpmqlp/image/upload/v1679902529/events/pgjiy0itgkjorgrmjdmp.png";

const testEmailTemplate = {
    path: "/api/test-email2",
    method: "post",
    handler: async (req, res) => {
        let mail = new email.TransactionalEmailsApi();
        const sendSmtpEmail = new email.SendSmtpEmail();
        sendSmtpEmail.templateId = 1;
        sendSmtpEmail.to = [{ email: "prathammaharjan1939@gmail.com" }];
        sendSmtpEmail.params = {
            
                username: username,
            
            image:image,
            name: name,
            location: location,
            startDate: startDate,
            endDate: endDate
        };
        try {
            await mail.sendTransacEmail(sendSmtpEmail).then(
                function (data) {
                    console.log(
                        "API called successfully. Returned data: " +
                            JSON.stringify(data)
                    );
                },
                function (error) {
                    console.error(error);
                }
            );
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
};

module.exports = testEmailTemplate;
