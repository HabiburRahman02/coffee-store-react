import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <Banner></Banner>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;