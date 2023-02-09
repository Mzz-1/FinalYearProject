import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Input from "../components/Input";

const ForgotPasswordPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = useForm();

    const [errorMessage, , setMessageError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const values = getValues();

    const handleFormSubmit = async () => {
        await axios.put(
            `http://localhost:5000/api/forgot-password/${values.resetPasswordEmail}`
        );
        setSuccess(true);
        setTimeout(() => {
            navigate("/login");
        }, 3000);
    };
    watch();
    return success ? (
        <div>
            <h1>Success</h1>
            <p>Check your email for a reset link.</p>
        </div>
    ) : (
        <div>
            <h1>Forgot Password</h1>
            <p>Enter your email and we'll send you a reset link.</p>
            {errorMessage && <div>{errorMessage}</div>}
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Input
                    type="text"
                    placeholder="someone@email.com"
                    register={{
                        ...register("resetPasswordEmail", {
                            required: "Please enter your email.",
                        }),
                    }}
                />
                <p>{errors.username?.message}</p>
                <button disabled={!values.resetPasswordEmail}>
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;
