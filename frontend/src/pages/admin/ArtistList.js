import { useState, useEffect } from "react";
import axios from "axios";
import {
    AdminHeading,
    AdminHeading2,
    Heading2,
    ModalHeading,
} from "../../components/Heading";
import { ModalPara } from "../../components/Paragraph";
import { useNavigate } from "react-router-dom";

import { Modal, LargeModal } from "../../components/Modal";
import { UserTable } from "../../components/UserTable";

const ArtistList = () => {

    const dateOptions = { day: "numeric", month: "long", year: "numeric" };
    return (
        <div className="flex flex-col gap-[40px] h-[100%] font-slab">

            <Heading2>Artists</Heading2>
            <div className="flex flex-col h-[90%] py-[30px] px-[20px] ">
                <div className="overflow-hidden">
                   <UserTable userType="artist"/>
                </div>
            </div>
        </div>
    );
};

export default ArtistList;
