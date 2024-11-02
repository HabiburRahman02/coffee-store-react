import React from 'react';

const CoffeeCard = ({ coffeeCard }) => {
    const { image, name, description, rating, popularity } = coffeeCard
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}?</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline px-6">{rating}</div>
                    <div className="badge badge-outline px-6">{popularity}</div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;