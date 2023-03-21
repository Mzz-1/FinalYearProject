import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from "../pages/login/Login";
import AdminLogin from "../pages/login/AdminLogin";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import PrivateRoute from "../service/Auth";
import { PrivateRouteAdmin } from "../service/Auth";
import VerifyEmailPage from "../pages/emailVerification/VerifyEmailPage";
import EmailVerificationPage from "../pages/emailVerification/EmailVerificationLandingPage";
import ForgotPasswordPage from "../pages/passwordReset/ForgotPasswordPage";
import PasswordResetLandingPage from "../pages/passwordReset/PasswordResetLandingPage";
import Store from "../pages/store/Store";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { ProductDetails } from "../pages/store/ProductDesc";
import ArtistPage from "../pages/artist/ArtistPage";
import Events from "../pages/events/Events";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const AllRoutes = () => {
    const location = useLocation();

    // Define an array of paths where Navbar and Footer should not appear
    const excludedPaths = ["/login", "/register", "/admin"];

    // Check if the current location matches any excluded path
    const shouldHide = excludedPaths.includes(location.pathname);

    return (
        <div>
            {!shouldHide && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminLogin />} />
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
                <Route path="/artists" element={<ArtistPage />} />

                <Route path="/events" element={<Events />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
            {!shouldHide && <Footer />}
        </div>
    );
};
