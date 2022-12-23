import React, {useState} from "react"



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
        <div className="">
            <form>
                <input 
                type="email" 
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
                value={loginFormData.email}
                />
                <input className="" 
                type="password" 
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={loginFormData.password}
                />
                <button className="">Log in</button>
                
            </form>
            <p>Forgot password</p>
            <p>Don't have an account? Sign up.</p>
        </div>
    );

}

export default Login