import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PrivateRoute from "../service/Auth";
import { PrivateRouteAdmin } from "../service/Auth";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { ProductDetails } from "../pages/store/ProductDesc";
import SplitScreen from "../components/SplitScreen";
import { AdminSidebar } from "../components/Sidebar";
import AddProductPage from "../pages/artistDashboard/AddProductsPage";
import { ArtistSidebar } from "../pages/artistDashboard/ArtistSidebar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Biography from "../pages/artistDashboard/Biography";

export const ArtistRoutes = () => {
    // Define an array of paths where Navbar and Footer should not appear

    // Check if the current location matches any excluded path

    return (
        <BrowserRouter>
            <SplitScreen>
                <ArtistSidebar />
                <Routes>
                    <Route path="/artist-dashboard">
                        <Route
                            path="control-panel"
                            element={<AdminDashboard />}
                        />

                        <Route
                            path="add-product"
                            element={<AddProductPage />}
                        />
                        <Route
                            path="biography"
                            element={<Biography />}
                        />
                    </Route>
                </Routes>
            </SplitScreen>
        </BrowserRouter>
    );
};
