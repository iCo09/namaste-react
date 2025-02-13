import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {  
    return (
        <div className="res-card">
            <img 
                className="resImg"
                alt="res-logo" 
                src={CDN_URL + restaurant?.info?.cloudinaryImageId} 
            />
            <h3>{restaurant?.info?.name}</h3>
            <p>{restaurant?.info?.cuisines?.join(", ")}</p>  
            <p>{restaurant?.info?.avgRating} STARS</p>
            <p>{restaurant?.info?.costForTwo}</p>
            <p>Time to deliver: {restaurant?.info?.sla?.deliveryTime} mins</p> 
        </div>
    );
};

export default RestaurantCard;
