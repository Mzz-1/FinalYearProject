import React, {useState} from "react"
import login from "../assets/moodyfae.jpg"

function Login(){

    const[loginFormData, setloginFromData]=useState({
        email:"",
        password:""
    })

    function handleChange(event){
        const {name,value}=event.target;
        setloginFromData(prevData=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    return(
        <div className="grid grid-rows-1 grid-cols-2 h-[100vh] text-[#9F7E7E] bg-[#F4F4F2]">
            <div className="flex justify-center items-center overflow-hidden">
            <img src={login} className="w-[50vw] object-cover " />
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] ">
                <div className="shadow-xl py-[60px] px-[40px] flex flex-col items-center justify-center gap-[30px] rounded-[20px] border-[#9F7E7E] border-[px]">
                <h1 className="text-5xl font-semibold ">SimplyArt</h1>
            <form className="flex flex-col gap-[30px] my-[20px] rounded-[20px]">
                <input 
                className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                type="email" 
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
                value={loginFormData.email}
                />
                <input
                className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                type="password" 
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={loginFormData.password}
                />
                <button className="w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]">Log in</button>
                
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

export default Login