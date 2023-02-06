import React, { useState } from "react";
import login from "../assets/moodyfae.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../service/useToken";
import Input from "../components/Input";

function Login() {
    const [token, setToken] = useToken();

    const navigate = useNavigate();

    const handleLogin = async ({ email, password }) => {
        const response = await axios.post("http://localhost:5000/api/login", {
            email: email,
            password: password,
        });

        const { token } = response.data;
        setToken(token)
        navigate('/')
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return (
        <div className="grid grid-rows-1 grid-cols-2 h-[100vh] text-[#9F7E7E] bg-[#F4F4F2]">
            <div className="flex justify-center items-center overflow-hidden">
                <img src={login} className="w-[50vw] object-cover " />
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] ">
                <div className="shadow-xl py-[60px] px-[40px] flex flex-col items-center justify-center gap-[30px] rounded-[20px] border-[#9F7E7E] border-[px]">
                    <h1 className="text-5xl font-semibold ">SimplyArt</h1>
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
                                        message:
                                            "The email address is invalid.",
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
                    <div className="flex flex-col justify-center items-center">
                        <p>Forgot password</p>
                        <p>Don't have an account? Sign up.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
