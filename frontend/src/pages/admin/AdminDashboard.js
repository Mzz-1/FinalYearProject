import { useState } from "react";
import SplitScreen from "../../components/SplitScreen";
import { AdminSidebar } from "../../components/AdminSidebar";
import AddEventPage from "./AddEventpage";
import AddProductPage from "../artistDashboard/AddProductsPage";
import { AdminEvent } from "./AdminEventsList";

const LeftComponent = () => {
    return <h1>left</h1>;
};

const RightComponent = () => {
    return <h2>right</h2>;
};

const AdminDashboard = () => {
    
    return (
       <></>
    );
};

export default AdminDashboard;
