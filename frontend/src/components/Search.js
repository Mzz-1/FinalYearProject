import { TfiSearch } from "react-icons/tfi";
import { useState } from "react";
import axios from "axios";

export const Search = ({ heading, onClick, register }) => {
    return (
        <>
            <input
                type="text"
                placeholder="KEYWORDS"
                {...register}
                className="w-[450px] relative h-[70px] my-[40px] mr-[0px] ml-auto border-2 outline-none pl-[30px] pr-[80px]"
            />{" "}
            <button className="relative" onClick={onClick}>
                {" "}
                <TfiSearch
                    size={30}
                    color="grey"
                    className="absolute right-[60px] top-[-15px]"
                />
            </button>
        </>
    );
};
