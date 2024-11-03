import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffeeCard }) => {
    const { id, image, name, description, rating, popularity } = coffeeCard
    return (
        <Link to={`/coffeeDetails/${id}`}>
            <div className="card h-full bg-base-100 w-full shadow-xl hover:scale-105 transition-all">
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
                        <div className="badge badge-outline px-6 py-3">Rating {rating}</div>
                        <div className="badge badge-outline px-6 py-3">{popularity}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CoffeeCard;