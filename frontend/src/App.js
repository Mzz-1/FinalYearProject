import { useUser } from "./service/useUser";
import { AllRoutes } from "./routes/Routes";
import { ArtistRoutes } from "./routes/ArtistDashboard";
import AdminRoutes from "./routes/AdminRoutes";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {

    useEffect(() => {
        Aos.init({ duration: 1500, once: true });
    }, []);

    const user = useUser();
    var role;
    if (user) {
        role = user.role;
    } else {
        role = "anon";
    }

    return (
        <BrowserRouter>
                {role === "anon" || role === "user" || role === "artist" ? (
                    <AllRoutes />
                ) : (
                    <></>
                )}
                {role === "artist" && <ArtistRoutes />}
                {role === "admin" && <AdminRoutes />}
           
           
        </BrowserRouter>
    );
}

export default App;
