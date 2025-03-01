import RestaurantCard, {withPromtedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //State Variable -> HOOKS
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);

    const[searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");
        const json = await data.json();
        console.log("API Response:", json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h1>Looks like youre offline, Please check your internt connection</h1>
    }


    //conditional rendering
    return listOfRestaurant.length === 0 ? <Shimmer/> :(
        <div className="body" >
            <div className="filter flex">
                <div className="search m-4 p-4" >
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
                    <button className="px-4 py-2 bg-green-200 m-4 rounded-lg hover:bg-green-300" onClick={() => {
                        //filter the restro cards
                        const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                        setFilteredRestaurants(filteredRestaurant);
                    }} >Search🔎</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => {
                   const filteredList = listOfRestaurant.filter((res) => parseFloat(res.info.avgRating) > 4);
                    setFilteredRestaurants(filteredList);
                }} > Top Rated Restaurants🚀
                
                </button>
                </div>      
            </div>
            <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.type === "F" ? (
              <RestaurantCardPromoted restaurant={restaurant} />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </Link>
        ))}
      </div>
        </div>
    );
};
export default Body;