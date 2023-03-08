import { useUser } from "./service/useUser";
import { AllRoutes } from "./routes/Routes";
import AdminRoutes from "./routes/AdminRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
    const user = useUser();
    var role;
    if (user) {
        role = user.role;
    } else {
        role = "anon";
    }

    return (
        <>
            {role === "anon" || role === "user" || role === "artist" ? (
                <BrowserRouter>
                    <AllRoutes />
                </BrowserRouter>
            ) : (
                <></>
            )}
            {role === "admin" ? <AdminRoutes /> : <></>}
        </>
    );
}

export default App;
