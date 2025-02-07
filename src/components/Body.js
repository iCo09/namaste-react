import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    //State Variable -> HOOKS
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);

    const[searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING");
        // const json = await data.json();
        // console.log(json);
        const timer = setTimeout(() => {
            setListOfRestaurant(resList);
            setFilteredRestaurants(resList);
             // Load resList after a delay
        }, 1000); // 2-second delay to simulate an API call

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    };

    //conditional rendering
    return listOfRestaurant.length === 0 ? <Shimmer/> :(
        <div className="body" >
            <div className="filter">
                <div className="search" >
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
                    <button onClick={() => {
                        //filter the restro cards
                        const filteredRestaurant = listOfRestaurant.filter((res) => res.restroName.toLowerCase().includes(searchText.toLowerCase())
                    );
                        setFilteredRestaurants(filteredRestaurant);
                    }} >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                   const filteredList = listOfRestaurant.filter((res) => res.rating > 4);
                    setFilteredRestaurants(filteredList);
                }} > Top Rated 
                
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.restroId} resData = {restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;