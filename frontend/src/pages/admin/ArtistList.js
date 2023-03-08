import { useState, useEffect } from "react";
import axios from "axios";
import {
    AdminHeading,
    AdminHeading2,
    ModalHeading,
} from "../../components/Heading";
import { ModalPara } from "../../components/Paragraph";
import { useNavigate } from "react-router-dom";

import { Modal, LargeModal } from "../../components/Modal";
import { UserTable } from "../../components/UserTable";

const ArtistList = () => {

    const dateOptions = { day: "numeric", month: "long", year: "numeric" };
    return (
        <div className="flex flex-col gap-[40px] h-[100%] ">
            <AdminHeading> Artists </AdminHeading>
            <div className="flex flex-col gap-[20px] border rounded-[10px] h-[90%] py-[30px] px-[20px] bg-white">
                <AdminHeading2> All registered Artists</AdminHeading2>
                <div className="overflow-scroll">
                   <UserTable userType="artist"/>
                </div>
            </div>
        </div>
    );
};

export default ArtistList;
