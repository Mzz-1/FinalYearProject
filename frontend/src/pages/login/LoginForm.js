import React, { useState } from "react";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useToken } from "../../service/useToken";

export const LoginForm = ({ formHeading }) => {
    const [token, setToken] = useToken();

    const navigate = useNavigate();

    const handleLogin = async ({ email, password }) => {
        const response = await axios.post("http://localhost:5000/api/login", {
            email: email,
            password: password,
        });

        const { token } = response.data;
        setToken(token);
       if( formHeading !== "Admin"){
        navigate("/admin-dashboard");
       }
        navigate("/");
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return (
        <div className="flex flex-col items-center justify-center gap-[10px] text-[#9F7E7E]">
            <div className="bg-white shadow-xl py-[60px] px-[40px] flex flex-col items-center justify-center gap-[30px] rounded-[20px] border-[#9F7E7E] border-[px]">
                <h1 className="text-5xl font-semibold ">{formHeading}</h1>
                <form
                    className="flex flex-col gap-[30px] my-[20px] rounded-[20px]"
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

                    <button className="w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]">
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
