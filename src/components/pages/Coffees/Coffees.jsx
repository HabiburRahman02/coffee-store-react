import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../Home/CoffeeCard";

const Coffees = () => {
    const coffees = useLoaderData();
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
        </div>
    );
};

export default Coffees;