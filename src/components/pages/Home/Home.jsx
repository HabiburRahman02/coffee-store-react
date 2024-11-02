import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Categories categories={categories}></Categories>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;