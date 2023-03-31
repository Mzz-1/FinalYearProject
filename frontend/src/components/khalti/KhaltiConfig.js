import axios from "axios";
export const Config = {
    // replace this key with yours

    publicKey: "test_public_key_ef50d27384c44698a9ff9b84f75519e3",
    productIdentity: "1234567890",
    productName: "SimplyArt",
    productUrl: "http://localhost:3000",
    eventHandler: {
        onSuccess(payload) {
            // hit merchant api for initiating verfication

            let data = {
                token: payload.token,
                amount: payload.amount,
            };

            let config = {
                headers: {
                    Authorization:
                        "Key test_secret_key_f59e8b7d18b4499ca40f68195a846e9b",
                },
            };

            axios
                .post("https://khalti.com/api/v2/payment/verify/", data, config)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(payload);
        },
        // onError handler is optional
        onError(error) {
            // handle errors
            console.log(error);
        },
        onClose() {
            console.log("widget is closing");
        },
    },
    paymentPreference: [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
    ],
};
