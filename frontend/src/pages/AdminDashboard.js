
import SplitScreen from "../components/SplitScreen"
import { AdminSidebar } from "../components/AdminSidebar"
import AddEventPage from "./AddEventpage"

const LeftComponent =()=>{
    return <h1>left</h1>
}

const RightComponent =()=>{
    return <h2>right</h2>
}

const AdminDashboard=()=>{
return(
    <SplitScreen>
        <AdminSidebar/>
        <AddEventPage/>
    </SplitScreen>
)
}

export default AdminDashboard