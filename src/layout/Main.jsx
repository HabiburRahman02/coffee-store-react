import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div>
            <div className="h-16"><Navbar></Navbar></div>
            <div className="my-14 min-h-[310px] max-w-[1300px] mx-auto px-2 md:px-0">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;