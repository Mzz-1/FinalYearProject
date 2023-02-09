import { useNavigate } from "react-router-dom";

const PasswordResetFail = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Ohh no</h1>
            <p>Something went wrong while trying to reset your paassword.</p>
            <button onClick={() => navigate("/login")}>
                Back to login page
            </button>
        </div>
    );
};

export default PasswordResetFail;
