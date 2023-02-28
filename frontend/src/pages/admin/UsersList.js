import { useState, useEffect } from "react";
import axios from "axios";
import {
    AdminHeading,
    AdminHeading2,
    ModalHeading,
} from "../../components/Heading";
import { ModalPara } from "../../components/Paragraph";
import { useNavigate } from "react-router-dom";
import {  DeleteButton } from "../../components/Button";
import { Modal, LargeModal } from "../../components/Modal";
import ViewEvents from "./ViewEvent";

const UserList = () => {
    const [userList, setUserList] = useState([]);
    const [viewuser, setViewUser] = useState([]);
    const navigate = useNavigate();

    const getUsers = async () => {
        const userData = await axios.get(
            `http://localhost:5000/api/users`
        );

        const data = await userData.data.users;
        setUserList(data);
        console.log("getEvents", data);
    };


    const deleteUser = async (id) => {
        const deleteData = await axios.delete(
            `http://localhost:5000/api/users/${id}`
        );
        getUsers();
    };

    useEffect(() => {
        getUsers();
    }, []);

    
    const dateOptions = { day: "numeric", month: "long", year: "numeric" };
    return (
        <div className="flex flex-col gap-[40px] h-[100%] ">
            <AdminHeading > Users </AdminHeading>
            <div className="flex flex-col gap-[20px] border rounded-[10px] h-[90%] py-[30px] px-[20px] bg-white">
                <AdminHeading2 text="All Events" />
                <div className="overflow-scroll">
                    <table className=" w-[100%] text-[#252733]">
                        <thead className="text-left top-0">
                            <tr className="text-[#A4A6B3] mx-[0px] my-[0px]">
                                <th className="font-extralight">SN</th>
                                <th className="font-extralight">Username</th>
                                <th className="font-extralight">Email Address</th>
                                <th className="font-extralight">Date Signed Up</th>
                                <th className="font-extralight">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="overflow-scroll">
                            {userList.map((user, index) => {
                                var dateCreated = new Date(user.createdAt);
                                const newDateCreatred =
                                dateCreated.toLocaleDateString(
                                        "en-US",
                                        dateOptions
                                    );

                       

                                return (
                                    <tr className="border-b divide-slate-400/25 h-[60px] first:border-t">
                                        <td>{index + 1}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{newDateCreatred}</td>
                                       
                                        <td className="">
                                           <Modal onClick={()=>deleteUser(user._id)}>
                                           <ModalHeading>
                                                    Remove user?
                                                </ModalHeading>
                                                <ModalPara>
                                                    Are you sure you want to
                                                    remove the following user?
                                                </ModalPara>
                                           </Modal>
                                           

                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList