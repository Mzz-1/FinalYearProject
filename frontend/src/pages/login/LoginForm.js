import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link,useParams } from "react-router-dom";
import { useToken } from "../../service/useToken";
import { SuccessToast, ErrorToast } from "../../helpers/Toast";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useQueryParams } from "../../service/useQueryParams";

export const LoginForm = ({ formHeading }) => {
    const [, setToken] = useToken();

    const [googleOauthUrl, setGoogleOauthURL] = useState("");

    const {token:oauthToken} = useQueryParams()

    const navigate = useNavigate()

    useEffect(() => {
        const loadOauthUrl = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/auth/google/url"
                );
                const { url } = response.data;
                setGoogleOauthURL(url);
            } catch {}
        };
        loadOauthUrl();
    }, []);

    useEffect(()=>{
        if(oauthToken){
            setToken(oauthToken)
           navigate('/')
        }
    },[oauthToken,setToken,navigate])

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
        <div className="flex flex-col items-center justify-center gap-[10px] text-[#9F7E7E]  font-slab">
            <button
                className="flex gap-2 items-center self-start px-12 mx-[auto] mb-[20px]"
                onClick={() => navigate("/")}
            >
                <BiArrowBack /> HOME
            </button>
            <div className="bg-white shadow-xl py-[60px] px-[40px] flex flex-col items-center justify-center gap-[30px] rounded-[20px] border-[#9F7E7E] border-[px]">
                <h1 className="text-5xl font-semibold font-libre">
                    {formHeading}
                </h1>
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
                    <button
                        disabled={!googleOauthUrl}
                        className="w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]"
                        onClick={()=>(window.location.href = googleOauthUrl)}
                    >
                        Log in with Google
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
