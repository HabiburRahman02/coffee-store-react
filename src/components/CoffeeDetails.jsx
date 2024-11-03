import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            Coffee details
        </div>
    );
};

export default CoffeeDetails;