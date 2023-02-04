import { Redirect, Route } from "react-router-dom";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PrivateRoutes = (props) => {
    const { component } = props;
    const user = null;
    if (!user) return redirect("/login");
    return <Route {...props} />;
};

const PrivateRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        const user = null;
        if (user == null) {
            navigate("/login");
        }
    }, []);
    return <Component />;
};

export default PrivateRoute;
