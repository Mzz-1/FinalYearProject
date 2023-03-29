const dotenv = require("dotenv");
dotenv.config();

const emailAPI = require("sib-api-v3-sdk");
const client = emailAPI.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const sendEventsEmail = ({
    users,
    name,
    location,
    startDate,
    endDate,
    image,
}) => {
    console.log("users", name, location, startDate, endDate, image);

    const emails = users.map((user) => ({
        email: user.email,
    }));

    console.log(emails);

    let mail = new emailAPI.TransactionalEmailsApi();
    const sendSmtpEmail = new emailAPI.SendSmtpEmail();
    sendSmtpEmail.templateId = 1;
    sendSmtpEmail.to = emails;
    sendSmtpEmail.params = {
        username: name,

        image: image,
        name: name,
        location: location,
        startDate: startDate,
        endDate: endDate,
    };
    try {
        mail.sendTransacEmail(sendSmtpEmail).then(
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
    } catch (err) {
        console.log(err);
    }
};

module.exports = sendEventsEmail;