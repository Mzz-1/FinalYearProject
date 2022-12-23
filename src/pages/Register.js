import React, { useState } from "react";

function Register() {
    const [registerFormData, setRegisterFromData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setRegisterFromData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    return (
        <div className="grid grid-rows-1 grid-cols-2 h-[100vh] text-[#9F7E7E] bg-[#F4F4F2]">
            <div className="flex items-center justify-center justify-items-start flex-col gap-[20px] px-[10vw]">
                <h1 className="text-7xl font-bold">SimplyArt</h1>
                <p className="text-2xl font-medium text-center">
                    SimplyArt is an online platform for exploring artists,
                    artworks and exhibitions. Sign up to continue!
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px]">
                <h2 className="text-5xl font-semibold ">Register</h2>
                <form className="flex flex-col gap-[30px] my-[20px]">
                    <input
                    className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                        type="text"
                        placeholder="Name"
                        name="username"
                        onChange={handleChange}
                        value={registerFormData.username}
                    />
                    <input
                    className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        onChange={handleChange}
                        value={registerFormData.email}
                    />
                    <input
                    className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={registerFormData.password}
                    />
                    <input
                    className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={registerFormData.confirmPassword}
                    />
                    <button className="w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]">Sign up</button>
                </form>
                <p>Forgot password?</p>
                <p>Already have an account? Log in</p>
            </div>
        </div>
    );
}

export default Register;
