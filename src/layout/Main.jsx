import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="my-14 min-h-[310px] max-w-[1300px] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;