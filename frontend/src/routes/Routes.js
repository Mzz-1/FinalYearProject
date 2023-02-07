import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivateRoute from "../service/Auth";
import VerifyEmailPage from "../pages/VerifyEmailPage";

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute Component={Home} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="verify-email" element={<VerifyEmailPage />} />
            </Routes>
        </BrowserRouter>
    );
};
