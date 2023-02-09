import { useNavigate } from "react-router-dom";

const PasswordResetSuccess = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Success</h1>
            <p>
                You password has been reset, please login with your new
                password.
            </p>
            <button onClick={() => navigate("/login")}>Go to Login page</button>
        </div>
    );
};

export default PasswordResetSuccess;
