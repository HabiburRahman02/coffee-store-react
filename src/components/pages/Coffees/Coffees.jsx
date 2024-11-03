import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../Home/CoffeeCard";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);
    // console.log(coffees);
    const handleSort = type => {
        if (type === 'sort-by-popularity') {
            const sortByPopularity = [...data].sort((a, b) => b.popularity - a.popularity);
            setCoffees(sortByPopularity);
        }
        else if (type === 'sort-by-rating') {
            const sortByRating = [...data].sort((a, b) => a.rating - b.rating);
            setCoffees(sortByRating);
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-semibold">Sort coffees by ratings and popularity</h3>
                <div className="flex items-center gap-4">
                    <button onClick={() => handleSort('sort-by-popularity')} className='btn bg-green-600 btn-accent text-white'>Sort By Popularity</button>
                    <button onClick={() => handleSort('sort-by-rating')} className='btn bg-green-600 btn-accent text-white'>Sort By Ratings</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    coffees?.map(coffeeCard => <CoffeeCard
                        key={coffeeCard.id}
                        coffeeCard={coffeeCard}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Coffees;