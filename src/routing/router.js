import {BrowserRouter , Routes , Route} from "react-router-dom";
import LoginPage from "../pages/loginpage.js"
import AdmDash from "../pages/AdminDashboard.js";
import { ChildComponent , MyAttendence } from "../components/Menu.js";
import StdDash from "../components/StudentView/StudentDash.js";

function Myroute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/adminDashboard" element={<AdmDash />} />
                <Route path="/Student" element={<ChildComponent />} />
                <Route path="/attendence" element={<MyAttendence />} />
                <Route path="/StudentDashBoard" element={<StdDash />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Myroute;