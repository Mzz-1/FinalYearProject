import { BrowserRouter, Routes, Route, useLocation, matchPath } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ArtistDashboard from "../pages/artistDashboard/ArtistDashboard";
import SplitScreen from "../components/SplitScreen";
import AddProductPage from "../pages/artistDashboard/AddProductsPage";
import { ArtistSidebar } from "../pages/artistDashboard/ArtistSidebar";
import Biography from "../pages/artistDashboard/Biography";
import FeaturedEvents from "../pages/artistDashboard/FeaturedEvents";
import { ManageProducts } from "../pages/artistDashboard/ManageProducts";
import { ManageEvents } from "../pages/artistDashboard/ManageEvents";
import { ManageOrders } from "../pages/artistDashboard/Order";

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
                                path=""
                                element={<ArtistDashboard />}
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
                            <Route
                                path="edit-event/:id"
                                element={<FeaturedEvents />}
                            />
                            <Route
                                path="manage-events"
                                element={<ManageEvents />}
                            />
                            <Route
                                path="orders"
                                element={<ManageOrders />}
                            />
                        </Route>
                    </Routes>
                </SplitScreen>
            )}
        </div>
    );
};
