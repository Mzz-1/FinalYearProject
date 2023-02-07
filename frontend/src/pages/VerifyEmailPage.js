import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmailPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("./");
        }, 3000);
    }, [navigate]);
    return (
        <div>
            <h1>Thanks for signing up!</h1>
            <p>
                A verification message has been sent to your email address.
                Please verify your email to continue.
            </p>
        </div>
    );
};

export default VerifyEmailPage;