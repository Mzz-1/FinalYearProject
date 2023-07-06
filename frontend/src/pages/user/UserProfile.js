import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";
import { useParams } from "react-router-dom";
import { SuccessToast, InfoToast } from "../../helpers/Toast";
import { DashboardActionButton } from "../../components/Button";
import { useUser } from "../../service/useUser";
import { Heading2 } from "../../components/Heading";

const UserProfilePage = () => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        control,
        formState: { errors },
    } = useForm();

    const user = useUser();

    const [userInfo, setUserInfo] = useState();
    const [artistCheck, setartistCheck] = useState();

    const validateConfirmPassword = (value) => {
        let error;
        if (value !== watch("password")) {
            error = "Passwords do not match";
        }
        return error || true;
    };

    const getUser = async () => {
        const response = await axios.get(
            `http://localhost:5000/api/users/${user.id}`
        );
        setUserInfo(response.data.user);
        console.log(response.data.user);
        setartistCheck(response.data.user.role === "artist" ? true : false);
    };

    useEffect(() => {
        getUser();
    }, []);

    const updateUserInfo = async ({ confirmPassword, receiveEmail, role }) => {
        console.log(confirmPassword, receiveEmail, role);
        if (confirmPassword || receiveEmail || role) {
            try {
                const response = await axios.patch(
                    `http://localhost:5000/api/users/${user.id}`,
                    {
                        confirmPassword,
                        receiveEmail,
                        role,
                    }
                );

                console.log(response.data);
                SuccessToast("Your information has been updated.");
            } catch (err) {
                console.log(`err:${err}`);
            }
        } else {
            InfoToast(
                "Please change the details before updating your profile."
            );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[20px] py-[50px] font-slab">
            <Heading2>Profile</Heading2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(updateUserInfo)}
            >
                <div className="grid grid-rows-1 justify-center gap-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <label>Username</label>
                        <Input
                            type="text"
                            placeholder="Username"
                            value={userInfo?.username}
                            register={{
                                ...register("username"),
                            }}
                            disabled={true}
                        />
                        <p>{errors.username?.message}</p>
                        <label>Email</label>
                        <Input
                            type="text"
                            placeholder="Email"
                            disabled={true}
                            value={userInfo?.email}
                            register={{
                                ...register("email"),
                            }}
                        />
                        <p>{errors.email?.message}</p>
                        <label>New Password</label>
                        <Input
                            type="text"
                            placeholder="Password"
                            register={{
                                ...register("password"),
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

                        <Controller
                            name="receiveEmail"
                            control={control}
                            defaultValue={userInfo?.receiveEmail}
                            render={({ field }) => (
                                <label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        defaultChecked={userInfo?.receiveEmail}
                                        {...field}
                                    />
                                    Receive email alerts about upcomming art
                                    events?
                                </label>
                            )}
                        />

                        <Controller
                            name="role"
                            control={control}
                            defaultValue={artistCheck}
                            render={({ field }) => (
                                <label className="">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        defaultChecked={artistCheck}
                                        {...field}
                                    />
                                    Sign up as an artist?
                                </label>
                            )}
                        />
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
