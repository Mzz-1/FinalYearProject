import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SplitScreen from "../components/SplitScreen";
import Page404 from "../pages/404page";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { AdminSidebar } from "../pages/admin/AdminSidebar";
import { PrivateRouteAdmin } from "../service/Auth";
import Login from "../pages/login/Login";
import AddEventPage from "../pages/admin/AddEventpage";
import AddProductPage from "../pages/artistDashboard/AddProductsPage";
import AdminEventPage from "../pages/admin/AdminEvents";
import UserList from "../pages/admin/UsersList";
import ArtistList from "../pages/admin/ArtistList";
import AdminLogin from "../pages/login/AdminLogin";

const AdminRoutes = () => {
    return (
        <>
                          
        <Route path="/admin-dashboard">
            <Route index element={<PrivateRouteAdmin Component={AdminDashboard} />} />
            <Route
                path="add-event"
                element={<PrivateRouteAdmin Component={AddEventPage} />}
            />
            <Route
                path="update-event/:id"
                element={<PrivateRouteAdmin Component={AddEventPage} />}
            />

            <Route
                path="events"
                element={<PrivateRouteAdmin Component={AdminEventPage} />}
            />
            <Route
                path="users"
                element={<PrivateRouteAdmin Component={UserList} />}
            />
            <Route
                path="artists"
                element={<PrivateRouteAdmin Component={ArtistList} />}
            />
          
        </Route>
  
</>
    );
};

export default AdminRoutes;
