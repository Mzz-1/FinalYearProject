import { useNavigate } from "react-router-dom";

const WhiteButton = ({ text, link, register }) => {
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

export default WhiteButton;
