import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const handleFormSubmit = (data) => {
        console.log(data);
       
    };
    watch();

    const validateConfirmPassword = (value) => {
        let error;
        if (!value) {
          error = "Confirm Password is required";
        } else if (value !== watch('password')) {
          error = "Passwords do not match";
        }
        return error || true;
      };

    return (
        <div className="grid grid-rows-1 grid-cols-2 h-[100vh] text-[#9F7E7E] bg-[#F4F4F2] 2xl:px-[8vw]">
            <div className="flex items-center justify-center justify-items-start flex-col gap-[20px] px-[6vw]">
                <h1 className="text-7xl font-bold">SimplyArt</h1>
                <p className="text-2xl font-medium text-center">
                    SimplyArt is an online platform for exploring artists,
                    artworks and exhibitions. Sign up to continue!
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px]">
                <h2 className="text-5xl font-semibold ">Register</h2>
                <form
                    className="flex flex-col gap-[30px] my-[20px]"
                    onSubmit={handleSubmit(handleFormSubmit)}
                >
                    <input
                        className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                        type="text"
                        placeholder="Name"
                        {...register("username", {
                            required: "Please enter your username.",
                        })}
                    />
                    <p>{errors.username?.message}</p>
                    <input
                        className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                        type="text"
                        placeholder="Email Address"
                        {...register("email", {
                            required: "Please enter your email address.",
                            pattern:{
                                value:emailRegex,
                                message:"The email address is invalid."
                            }
                        })}
                    />
                    <p>{errors.email?.message}</p>
                    <input
                        className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Please enter your password.",
                            minLength: {
                                value: 8,
                                message:
                                    "Password length should be at least 8 characters.",
                            },
                        })}
                    />
                    <p>{errors.password?.message}</p>
                    <input
                        className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {  
                            validate:validateConfirmPassword 
                        })}
                    />
                    <p>{errors.confirmPassword?.message}</p>
                  
                    <button className="w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]">
                        Sign up
                    </button>
                </form>
                <p>Forgot password?</p>
                <p>Already have an account? Log in</p>
            </div>
        </div>
    );
}

export default Register;
