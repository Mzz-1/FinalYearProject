import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";
import { useToken } from "../service/useToken";

function Register() {
    const [token, setToken] = useToken();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm();

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const handleFormSubmit = async ({
        username,
        email,
        confirmPassword,
        role,
    }) => {
        try {
            const userType = role ? "artist" : "user";
            const response = await axios.post(
                "http://localhost:5000/api/signup",
                {
                    username: username,
                    email: email,
                    password: confirmPassword,
                    role: userType,
                }
            );
            console.log(confirmPassword, email);
            console.log(response.data);
            const { token } = response.data;
            console.log(token);
            setToken(token);
            navigate("/verify-email");
        } catch (err) {
            console.log(`err:${err}`);
        }
    };
    watch();

    const validateConfirmPassword = (value) => {
        let error;
        if (!value) {
            error = "Confirm Password is required";
        } else if (value !== watch("password")) {
            error = "Passwords do not match";
        }
        return error || true;
    };

    return (
        <div className="grid grid-rows-1 grid-cols-2 h-[100%] text-[#9F7E7E] bg-[#F4F4F2] 2xl:px-[8vw] py-[40px]">
            <div className="flex items-center justify-center justify-items-start flex-col gap-[20px] px-[6vw]">
                <h1 className="text-7xl font-bold">SimplyArt</h1>
                <p className="text-2xl font-medium text-center">
                    SimplyArt is an online platform for exploring artists,
                    artworks and exhibitions. Sign up to continue!
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px]">
                <h2 className="text-5xl font-semibold ">Register</h2>
                <form
                    className="flex flex-col gap-[25px] my-[20px]"
                    onSubmit={handleSubmit(handleFormSubmit)}
                >
                    <Input
                        type="text"
                        placeholder="Name"
                        register={{
                            ...register("username", {
                                required: "Please enter your username.",
                            }),
                        }}
                    />
                    <p>{errors.username?.message}</p>
                    <Input
                        type="text"
                        placeholder="Email Address"
                        register={{
                            ...register("email", {
                                required: "Please enter your email address.",
                                pattern: {
                                    value: emailRegex,
                                    message: "The email address is invalid.",
                                },
                            }),
                        }}
                    />
                    <p>{errors.email?.message}</p>
                    <Input
                        type="password"
                        placeholder="Password"
                        register={{
                            ...register("password", {
                                required: "Please enter your password.",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Password length should be at least 8 characters.",
                                },
                            }),
                        }}
                    />
                    <p>{errors.password?.message}</p>
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        register={{
                            ...register("confirmPassword", {
                                validate: validateConfirmPassword,
                            }),
                        }}
                    />

                    <p>{errors.confirmPassword?.message}</p>
                    <Controller
                        name="role"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <label>
                                <input type="checkbox" {...field} />
                                Do you wnat to sign up as an artist?
                            </label>
                        )}
                    />
                    <button className="w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]">
                        Sign up
                    </button>
                </form>

                <p>
                    Already have an account?<Link to="/login">Log in.</Link>{" "}
                </p>
            </div>
        </div>
    );
}

export default Register;
