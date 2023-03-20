import { TfiSearch } from "react-icons/tfi";
import { useState } from "react";
import axios from "axios";

export const Search = ({ heading }) => {
 
    const searchProducts= ()=>{
        
    }

    return (
        <div className="flex relative">
            <input
                type="text"
                placeholder="KEYWORDS"
                className="w-[450px] h-[70px] my-[40px] mr-[0px] ml-auto shadow-in outline-none pl-[30px] pr-[80px]"
            />{" "}
            <button onClick={searchProducts}> <TfiSearch size={30} color="grey" className="absolute right-[30px] top-[60px]"/></button>
           
        </div>
    );
};
