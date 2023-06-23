import { useNavigate } from "react-router-dom";

export const ViewButton = ({ onClick }) => {
    return (
        <button
            className="h-[30px] w-[80px] bg-[#29CC97] text-white text-center rounded-[10px] mr-[20px]"
            onClick={onClick}
        >
            View
        </button>
    );
};

export const EditButton = ({onClick}) => {
    return (
        <button className="h-[30px] w-[80px] bg-[#eb8f34] text-white text-center rounded-[10px] mr-[20px]" onClick={onClick}>
            Edit
        </button>
    );
};

export const DeleteButton = ({ onClick }) => {
    return (
        <button
            className="h-[30px] w-[80px] bg-[#a83232] text-white text-center rounded-[10px] "
            onClick={onClick}
        >
            Delete
        </button>
    );
};

export const YesButton = ({ onClick }) => {
    return (
        <button
            className="h-[30px] w-[80px] bg-[#29CC97] text-white text-center rounded-[5px] mr-[5px]"
            onClick={onClick}
        >
            Yes
        </button>
    );
};

export const NoButton = ({ children, onClick }) => {
    return (
        <button
            className="h-[30px] w-[80px] bg-[#a83232] text-white text-center rounded-[5px] ml-[5px]"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export const VisitButton = ({ deleteEvent }) => {
    return (
        <button
            className="h-[30px] w-[80px] bg-[#29CC97] text-white text-center rounded-[10px] ml-[20px]"
            onClick={deleteEvent}
        >
            Delete
        </button>
    );
};

export const WhiteButton = ({ text, link, register }) => {
    const navigate = useNavigate();

    return (
        <button
            className="px-[10px] py-[10px] border mt-[20px]"
            onClick={() => {
                navigate(`${link}`);
            }}
        >
            {text}
        </button>
    );
};

export const BlueButton = ({ children, link, register }) => {
    const navigate = useNavigate();

    return (
        <button
            className="px-[30px] py-[8px] font-semibold bg-[#74d6e3] mb-[20px] text-[#fefefe] text-center"
            onClick={() => {
                navigate(`${link}`);
            }}
        >
            {children}
        </button>
    );
};

export const BlackButton = ({ text, link, register }) => {
    const navigate = useNavigate();

    return (
        <button
            className="px-[10px] py-[10px] border-black border mb-[20px] text-[black] text-center font-slab"
            onClick={() => {
                navigate(`${link}`);
            }}
        >
            {text}
        </button>
    );
};

export const BlackRButton = ({ children, link, register }) => {
    const navigate = useNavigate();

    return (
        <button
            className="px-[10px] w-[180px] font-medium rounded-3xl m-auto py-[10px] border-black border mb-[20px] text-[black] text-center"
            onClick={() => {
                navigate(`${link}`);
            }}
        >
            {children}
        </button>
    );
};

export const UpdateButton = ({ children }) => {
    return (
        <button className="h-[50px] w-[180px] bg-[#29CC97] text-lg text-white text-center rounded-[5px] mr-[20px]">
            {children}
        </button>
    );
};

export const DashboardActionButton = ({ children, onClick }) => {
    return (
        <button
            className="h-[60px] w-[300px] bg-[#29CC97] text-white text-[22px] text-center rounded-[5px]"
            onClick={onClick}
        >
            {children}
        </button>
    );
};