import { useNavigate } from "react-router-dom";

const EmailVerificationFail = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Ohh no</h1>
            <p>Something went wrong while trying to verify your email</p>
            <button onClick={()=> navigate('/register')}>Back to Sign up</button>
        </div>
    );
};

export default EmailVerificationFail;
