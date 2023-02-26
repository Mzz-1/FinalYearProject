import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import PrivateRoute from "../service/Auth";
import VerifyEmailPage from "../pages/emailVerification/VerifyEmailPage";
import EmailVerificationPage from "../pages/emailVerification/EmailVerificationLandingPage";
import ForgotPasswordPage from "../pages/passwordReset/ForgotPasswordPage";
import PasswordResetLandingPage from "../pages/passwordReset/PasswordResetLandingPage";
import Store from "../pages/store/Store";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddEventPage from "../pages/admin/AddEventpage";
import Events from "../pages/events/Events";
import AddProductPage from "../pages/artistDashboard/AddProductsPage";
import AdminEventPage from "../pages/admin/AdminEvents";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />

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
                <Route path="/admin" element={<Login />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route
                    path="/admin-dashboard/add-event"
                    element={<AddEventPage />}
                />
                <Route
                    path="/admin-dashboard/add-product"
                    element={<AddProductPage />}
                />
                <Route path="/events" element={<Events />} />
                <Route
                    path="/admin-dashboard/events"
                    element={<AdminEventPage />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
