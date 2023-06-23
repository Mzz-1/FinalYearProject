import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "../pages/login/Login";
import AdminLogin from "../pages/login/AdminLogin";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import PrivateRoute from "../service/Auth";
import VerifyEmailPage from "../pages/emailVerification/VerifyEmailPage";
import EmailVerificationPage from "../pages/emailVerification/EmailVerificationLandingPage";
import ForgotPasswordPage from "../pages/passwordReset/ForgotPasswordPage";
import PasswordResetLandingPage from "../pages/passwordReset/PasswordResetLandingPage";
import Store from "../pages/store/Store";
import { ProductDetails } from "../pages/store/ProductDesc";
import ArtistPage from "../pages/artist/ArtistPage";
import Events from "../pages/events/Events";
import ArtistBiography from "../pages/artist/ArtistBiography";
import ArtistPortfolio from "../pages/artist/ArtistPortfolio";
import ArtistExhibition from "../pages/artist/ArtistExhibition";
import CheckoutPage from "../pages/store/Checkout";
import { Cart } from "../pages/store/Cart";
import { OrderSummary } from "../pages/store/OrderSummary";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


export const AllRoutes = () => {
    const location = useLocation();

    // Define an array of paths where Navbar and Footer should not appear
    const excludedPaths = [
        "/login",
        "/register",
        "/admin",
        "/artist-dashboard",
        "/artist-dashboard/edit-product/*",
    ];

    // Check if the current location matches any excluded path

    const shouldHide = excludedPaths.some(
        (path) =>
            typeof location.pathname === "string" &&
            location.pathname.match(path)
    );
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
                <Route path="/artist-profile">
                    <Route path="biography/:id" element={<ArtistBiography />} />
                    <Route path="portfolio/:id" element={<ArtistPortfolio />} />
                    <Route
                        path="exhibition/:id"
                        element={<ArtistExhibition />}
                    />
                </Route>
                <Route path="/events" element={<Events />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route
                    path="/cart"
                    element={<PrivateRoute Component={Cart} />}
                />
                <Route
                    path="/checkout/:id"
                    element={<PrivateRoute Component={CheckoutPage} />}
                />
                <Route
                    path="/order-summary/:id"
                    element={<PrivateRoute Component={OrderSummary} />}
                />
            </Routes>
            {!shouldHide && <Footer />}
        </div>
    );
};
