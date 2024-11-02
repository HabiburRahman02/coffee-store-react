import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { data } from 'autoprefixer';

const CoffeeCards = () => {
    const { category } = useParams();
    const coffeeCards = useLoaderData();
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        if (category) {
            const filterByCategory = [...coffeeCards].filter(coffeeCard => coffeeCard.category === category);
            setCoffees(filterByCategory);
        }
        else {
            setCoffees(coffeeCards.slice(0, 6))
        }
    }, [category, data])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    coffees?.map(coffeeCard => <CoffeeCard
                        key={coffeeCard.id}
                        coffeeCard={coffeeCard}
                    ></CoffeeCard>)
                }
            </div>
            <button className='btn bg-green-600 btn-accent text-white mt-8'>See More Coffees</button>
        </div>
    );
};

export default CoffeeCards;