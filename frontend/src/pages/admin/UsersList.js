
import {
    AdminHeading,
    AdminHeading2,
    ModalHeading,
} from "../../components/Heading";
import { UserTable } from "../../components/UserTable";



const UserList = () => {
   
    return (
        <div className="flex flex-col gap-[40px] h-[100%] ">
            <AdminHeading> Users </AdminHeading>
            <div className="flex flex-col gap-[20px] border rounded-[10px] h-[90%] py-[30px] px-[20px] bg-white">
                <AdminHeading2> All Users</AdminHeading2>
                <div className="overflow-scroll">
                   <UserTable userType="user"/>
                </div>
            </div>
        </div>
    );
};

export default UserList;
