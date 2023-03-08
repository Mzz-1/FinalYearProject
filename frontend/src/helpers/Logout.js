import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";

export const LogOut = () => {
    const navigate = useNavigate();
    localStorage.removeItem("token");
    <Modal>
        You have been logged out.
    </Modal>
    navigate('/')
};
