import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivateRoute from "../service/Auth";
import VerifyEmailPage from "../pages/VerifyEmailPage";
import EmailVerificationPage from "../pages/EmailVerificationLandingPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import PasswordResetLandingPage from "../pages/PasswordResetLandingPage";
import Store from "../pages/Store";
import AdminDashboard from "../pages/AdminDashboard";
import AddEventPage from "../pages/AddEventpage";

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
                <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                />
                <Route
                    path="/reset-password/:passwordResetCode"
                    element={<PasswordResetLandingPage />}
                />
                <Route path="/store" element={<Store />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/add-event" element={<AddEventPage />} />
            </Routes>
        </BrowserRouter>
    );
};
