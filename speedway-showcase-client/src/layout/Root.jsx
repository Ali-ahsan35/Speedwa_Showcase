import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/navbar/Navbar";
import Footer from "../pages/Home/footer";

const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;