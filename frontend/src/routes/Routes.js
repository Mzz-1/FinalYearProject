import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivateRoute from "../service/Auth";
import VerifyEmailPage from "../pages/VerifyEmailPage";
import EmailVerificationPage from "../pages/EmailVerificationLandingPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute Component={Home} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify-email" element={<VerifyEmailPage />} />
                <Route
                    path="/verify-email/:verificationString"
                    element={<EmailVerificationPage />}
                />
                <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};
