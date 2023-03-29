import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";
import { useParams } from "react-router-dom";

const CheckoutPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    watch("image");

    const [userList, setUserList] = useState([]);

    const { id: cartID } = useParams();

    const addDelivery = async ({district,city,streetName,contactNo}) => {
        console.log("1");

      

        try {
            const response = await axios.post(
                "http://localhost:5000/api/delivery",
                {
                    district,
                    city,
                    streetName,
                    contactNo,
                    cartID

                },
                
            );
            // console.log(
            //     name,
            //     place,
            //     location,
            //     image,
            //     startDate,
            //     endDate,
            //     startTime,
            //     endTime
            // );
            console.log(response.data);
          
        } catch (err) {
            console.log(`err:${err}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[20px] py-[50px]">
            <h2 className="text-5xl font-semibold ">Checkout</h2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(addDelivery)}
            >
                <div className="grid grid-rows-1 justify-center gap-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <label>District</label>
                        <Input
                            type="text"
                            placeholder="District"
                            register={{
                                ...register("district", {
                                    required: "Please enter your district.",
                                }),
                            }}
                        />
                        <p>{errors.district?.message}</p>
                        <label>City</label>
                        <Input
                            type="text"
                            placeholder="City"
                            register={{
                                ...register("city", {
                                    required: "Please enter your city.",
                                }),
                            }}
                        />
                        <p>{errors.city?.message}</p>
                        <label>Street</label>
                        <Input
                            type="text"
                            placeholder="Street"
                            register={{
                                ...register("streetName", {
                                    required:
                                        "Please enter your street address.",
                                }),
                            }}
                        />
                        <p>{errors.streetName?.message}</p>

                        <label>Contact No</label>
                        <Input
                            type="text"
                            placeholder="Contact Number"
                            register={{
                                ...register("contactNo", {
                                    required:
                                        "Please enter your contact number.",
                                }),
                            }}
                        />
                        <p>{errors.contactNo?.message}</p>
                    </div>
                </div>
                <button className="w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]">
                    Proceed to payment
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;
