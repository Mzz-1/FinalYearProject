import { Redirect, Route } from "react-router-dom";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "./useUser";
import Login from "../pages/login/Login";

const PrivateRoutes = (props) => {
    const { component } = props;
    const user = null;
    if (!user) return redirect("/login");
    return <Route {...props} />;
};

const PrivateRoute = (props) => {
    const { Component,userType } = props;
    const navigate = useNavigate();
    const user = useUser();
    useEffect(() => {
        if (user == null) {
            navigate("/login");
        }
    }, []);
    if(userType){
        return <Component userType={userType}/>
    }
    return <Component />;
};

export const PrivateRouteAdmin = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    const user = useUser();
    useEffect(() => {
        if (user.role !== "admin") {
            navigate("/login");
        }
    }, []);

    return <Component />;
};

export default PrivateRoute;
