import React, { useState } from "react";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useToken } from "../../service/useToken";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuccessToast, ErrorToast } from "../../helpers/Toast";
import { BiArrowBack } from "react-icons/bi";
import { useUser } from "../../service/useUser";

export const LoginForm = ({ formHeading }) => {
    const [token, setToken] = useToken();

    const navigate = useNavigate();
    const handleLogin = async ({ email, password }) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/login",
                {
                    email: email,
                    password: password,
                }
            );

            const { token } = response.data;
            setToken(token);
           

            if (formHeading === "Admin") {
                navigate("/admin-dashboard");
                window.location.reload(true);
            } else {
                navigate("/");
            }

            SuccessToast("Log In Successful");
        } catch (err) {
            if (err.response) {
                // Error with response received
                const status = err.response.status;
                if (status === 403) {
                    ErrorToast("Please verify your account first..");
                    console.log("Conflict error:", err.response.data.message);
                } else if (status === 401) {
                    // Unauthorized error (e.g., invalid credentials)
                    console.log(
                        "Unauthorized error:",
                        err.response.data.message
                    );
                    ErrorToast("Invalid Credentials");
                } else {
                    // Other errors
                    console.log(
                        "Error with response:",
                        err.response.data.message
                    );
                }
            } else if (err.request) {
                // Error making the request
                console.log("Error making request:", err.request);
            } else {
                // Other errors
                console.log("Error:", err.message);
            }
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return (
        <div className="flex flex-col items-center justify-center gap-[10px] text-[#9F7E7E]   font-slab">
            <button
                className="flex gap-2 items-center self-start px-12 mx-[auto] mb-[20px]"
                onClick={() => navigate("/")}
            >
                <BiArrowBack /> HOME
            </button>
            <div className="md:bg-white md:shadow-xl py-[60px] md:px-[40px] flex flex-col items-center justify-center gap-[30px] rounded-[20px] md:border-[#9F7E7E]">
                <h1 className="text-5xl font-semibold font-libre">{formHeading}</h1>
                <form
                    className="flex flex-col gap-[30px] my-[20px] rounded-[20px] w-[90vw] max-w-[400px] md:max-w-none md:w-auto"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <Input
                        type="text"
                        placeholder="Email address"
                        register={{
                            ...register("email", {
                                required: "Please enter your email.",
                                pattern: {
                                    value: emailRegex,
                                    message: "The email address is invalid.",
                                },
                            }),
                        }}
                    />
                    <p>{errors.username?.message}</p>
                    <Input
                        type="password"
                        placeholder="Password"
                        register={{
                            ...register("password", {
                                required: "Please enter youy password.",
                            }),
                        }}
                    />
                    <p>{errors.password?.message}</p>

                    <button className="md:w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]">
                        Log in
                    </button>
                </form>
                {formHeading !== "Admin" && (
                    <div className="flex flex-col justify-center items-center">
                        <p>
                            <Link to="/forgot-password">Forgot password</Link>{" "}
                        </p>
                        <p>
                            Don't have an account?{" "}
                            <Link to="/register">Sign up.</Link>{" "}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
