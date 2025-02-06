import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    //State Variable -> HOOKS
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING");
        // const json = await data.json();
        // console.log(json);
        const timer = setTimeout(() => {
            setListOfRestaurant(resList); // Load resList after a delay
        }, 1000); // 2-second delay to simulate an API call

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    };

    if(listOfRestaurant.length === 0){
        return <Shimmer/>
    }
 
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