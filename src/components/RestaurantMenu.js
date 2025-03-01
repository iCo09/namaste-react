import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestauramtCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);

    return (
        <div className="text-center" >
           <h1 className="font-bold my-6 text-2xl" >{name}</h1>
           <p className="font-bold text-lg" >{cuisines.join(", ")} - {costForTwoMessage}</p>
           {categories.map((category) => <RestauramtCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
        </div>
    )
}
export default RestaurantMenu;