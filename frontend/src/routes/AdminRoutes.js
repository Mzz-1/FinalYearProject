import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplitScreen from "../components/SplitScreen";

import AdminDashboard from "../pages/admin/AdminDashboard";
import { AdminSidebar } from "../pages/admin/AdminSidebar";
import { PrivateRouteAdmin } from "../service/Auth";
import Login from "../pages/login/Login";
import AddEventPage from "../pages/admin/AddEventpage";
import AddProductPage from "../pages/artistDashboard/AddProductsPage";
import AdminEventPage from "../pages/admin/AdminEvents";
import UserList from "../pages/admin/UsersList";
import ArtistList from "../pages/admin/ArtistList";

const AdminRoutes = () => {
    return (
        <BrowserRouter>
            <SplitScreen>
                <AdminSidebar />
                <Routes>
                    <Route path="/admin-dashboard">
                        <Route
                            path="control-panel"
                            element={<AdminDashboard />}
                        />
                        <Route path="add-event" element={<AddEventPage />} />
                        <Route
                            path="add-product"
                            element={<AddProductPage />}
                        />

                        <Route path="events" element={<AdminEventPage />} />
                        <Route path="users" element={<UserList />} />
                        <Route path="artists" element={<ArtistList />} />
                    </Route>
                </Routes>
            </SplitScreen>
        </BrowserRouter>
    );
};

export default AdminRoutes;
