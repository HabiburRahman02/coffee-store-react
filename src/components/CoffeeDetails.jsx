import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const thisCoffee = data.find(coffee => coffee.id === parseInt(id));
    const { image, name, description, rating, popularity } = thisCoffee
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl hover:scale-105 transition-all">
                <figure>
                    <img
                        className="w-1/3"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body  space-y-4">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}?</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline px-6 py-3">Rating {rating}</div>
                        <button className="btn btn-accent text-white bg-green-500">Add To Favorite</button>
                        <div className="badge badge-outline px-6 py-3">{popularity}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;