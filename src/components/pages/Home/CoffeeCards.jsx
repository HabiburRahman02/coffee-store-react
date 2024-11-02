import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const CoffeeCards = () => {
    const params = useParams();
    const coffeeCards = useLoaderData();
    console.log(coffeeCards);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    coffeeCards.map(coffeeCard => <CoffeeCard
                        key={coffeeCard.id}
                        coffeeCard={coffeeCard}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default CoffeeCards;