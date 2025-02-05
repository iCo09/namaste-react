import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

    //State Variable -> HOOKS

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  
    return (
        <div className="body" >
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                   const filteredList = listOfRestaurant.filter((res) => res.rating > 4);
                    setListOfRestaurant(filteredList);
                }} > Top Rated 
                
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.restroId} resData = {restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;