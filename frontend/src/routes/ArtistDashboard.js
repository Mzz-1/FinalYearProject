import { BrowserRouter, Routes, Route, useLocation, matchPath } from "react-router-dom";
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
import FeaturedEvents from "../pages/artistDashboard/FeaturedEvents";
import { ManageProducts } from "../pages/artistDashboard/ManageProducts";

export const ArtistRoutes = () => {
    const location = useLocation();
    console.log("location", location);
    console.log("pathname", location.pathname);
    // Define an array of paths where dashboard should appear
    const includedPaths = ["/artist-dashboard/*"];

    // Check if the current location matches any included path
    const shouldDisplayDashboard = includedPaths.some((path) =>
    typeof location.pathname === 'string' && location.pathname.match(path)
  );
    return (
        <div>
            {shouldDisplayDashboard && (
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
                                path="edit-product/:id"
                                element={<AddProductPage />}
                            />
                            <Route
                                path="manage-products"
                                element={<ManageProducts />}
                            />
                            <Route path="biography" element={<Biography />} />
                            <Route
                                path="add-event"
                                element={<FeaturedEvents />}
                            />
                        </Route>
                    </Routes>
                </SplitScreen>
            )}
        </div>
    );
};
