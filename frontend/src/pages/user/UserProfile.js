import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";
import { useParams } from "react-router-dom";
import { SuccessToast } from "../../helpers/Toast";
import { DashboardActionButton } from "../../components/Button";
import { useUser } from "../../service/useUser";

const UserProfilePage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    watch("image");

    const user = useUser();

    const [userList, setUserList] = useState([]);

    const { id: cartID } = useParams();

    const validateConfirmPassword = (value) => {
        let error;
        if (!value) {
            error = "Confirm Password is required";
        } else if (value !== watch("password")) {
            error = "Passwords do not match";
        }
        return error || true;
    };

    const updateUserInfo = async ({ userName, confirmPassword }) => {
        console.log("1");

        try {
            const response = await axios.patch(
                `http://localhost:5000/api/users/${user.id}`,
                {
                    userName,
                    confirmPassword,
                  
                }
            );

            console.log(response.data);
            SuccessToast("Your order has been confirmed.");
        } catch (err) {
            console.log(`err:${err}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[20px] py-[50px]">
            <h2 className="text-5xl font-semibold ">Checkout</h2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(updateUserInfo)}
            >
                <div className="grid grid-rows-1 justify-center gap-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <label>UserName</label>
                        <Input
                            type="text"
                            placeholder="Username"
                            register={{
                                ...register("username", {
                                    required: "Please enter your username.",
                                }),
                            }}
                        />
                        <p>{errors.username?.message}</p>
                        <label>Email</label>
                        <Input
                            type="text"
                            placeholder="email"
                            register={{
                                ...register("email", {
                                    required: "Please enter your email.",
                                }),
                            }}
                        />
                        <p>{errors.email?.message}</p>
                        <label>Password</label>
                        <Input
                            type="text"
                            placeholder="Password"
                            register={{
                                ...register("password", {
                                    required: "Please enter your password.",
                                }),
                            }}
                        />
                        <p>{errors.password?.message}</p>

                        <label>Confirm Password</label>
                        <Input
                            type="text"
                            placeholder="Confirm Password"
                            register={{
                                ...register("confirmPassword", {
                                    validate: validateConfirmPassword,
                                }),
                            }}
                        />
                        <p>{errors.confirmPassword?.message}</p>
                    </div>
                </div>
                <DashboardActionButton>
                    Update Information
                </DashboardActionButton>
            </form>
        </div>
    );
};

export default UserProfilePage;
