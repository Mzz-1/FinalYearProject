import { useNavigate } from "react-router-dom";

const EmailVerificationSuccess = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Success</h1>
            <p>Thank you for verfying your email</p>
            <button onClick={()=> navigate('/')}>Go to Home page</button>
        </div>
    );
};

export default EmailVerificationSuccess;
