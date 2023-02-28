import { useState } from "react";
import { DeleteButton, YesButton, NoButton } from "./Button";

export const Modal = ({ children, onClick, message }) => {
    const [shouldShow, setShouldShow] = useState(false);
    const [modal, setModal] = useState(false);

    return (
        <>
            <DeleteButton onClick={() => setModal(true)} />
            {modal && (
                <div
                    className="w-[100%] h-[100%] fixed left-0 top-0 z-1 overflow-auto bg-gray-800 bg-opacity-80 flex justify-center items-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="bg-white h-[200px] w-[400px]  p-[20px] rounded-[10px] flex flex-col gap-[20px]">
                        {children}
                        <div className="ml-auto mr-0">
                            {" "}
                            <YesButton onClick={onClick} />
                            <NoButton onClick={() => setModal(false)} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
