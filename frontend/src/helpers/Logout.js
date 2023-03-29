import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";

export const LogOut = () => {
    const navigate = useNavigate();
    localStorage.removeItem("token");
  
    navigate('/')
};
