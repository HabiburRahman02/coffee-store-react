import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {

    return (
        <div className="my-8">
            <div role="tablist" className="tabs tabs-bordered">
                {
                    categories.map(category =>
                        <NavLink key={category.category} to={`/category/${category.category}`} role="tab"
                            className={({ isActive }) => `tab font-semibold text-lg ${isActive && 'text-red-500 tab-active'}`}>
                            {category.category}
                        </NavLink>)
                }
            </div>

        </div>
    );
};

export default Categories;