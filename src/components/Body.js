import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //State Variable -> HOOKS
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);

    const[searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=30.7333148&lng=76.7794179&carousel=true&third_party_vendor=1");
        const json = await data.json();
        console.log("API Response:", json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h1>Looks like youre offline!!, Please check your internt connection</h1>
    }


    //conditional rendering
    return listOfRestaurant.length === 0 ? <Shimmer/> :(
        <div className="body" >
            <div className="filter">
                <div className="search" >
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
                    <button onClick={() => {
                        //filter the restro cards
                        const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                        setFilteredRestaurants(filteredRestaurant);
                    }} >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                   const filteredList = listOfRestaurant.filter((res) => parseFloat(res.info.avgRating) > 4);
                    setFilteredRestaurants(filteredList);
                }} > Top Rated 
                
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}><RestaurantCard  restaurant = {restaurant}/></Link>
                ))}
            </div>
        </div>
    );
};
export default Body;