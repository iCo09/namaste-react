import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {  
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
                className="rounded-lg"
                alt="res-logo" 
                src={CDN_URL + restaurant?.info?.cloudinaryImageId} 
            />
            <h3 className="font-bold py-4 text-lg">{restaurant?.info?.name}</h3>
            <p>{restaurant?.info?.cuisines?.join(", ")}</p>  
            <p>{restaurant?.info?.avgRating} STARS</p>
            <p>{restaurant?.info?.costForTwo}</p>
            <p>Time to deliver: {restaurant?.info?.sla?.deliveryTime} mins</p> 
        </div>
    );
};

//Higher order component

//input - RestaurantCard => RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
