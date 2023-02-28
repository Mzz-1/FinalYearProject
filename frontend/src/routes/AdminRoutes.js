import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplitScreen from "../components/SplitScreen";

import AdminDashboard from "../pages/admin/AdminDashboard";
import { AdminSidebar } from "../components/AdminSidebar";




const AdminRoutes = () => {
   
    return (
        <BrowserRouter>
        <SplitScreen>
            <AdminSidebar />
           <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}>

        </Route>
           </Routes>
        </SplitScreen>
        </BrowserRouter>
    );
};

export default AdminRoutes;
