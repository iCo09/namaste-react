import {LOGO_URL} from "../utils/constants";
const RestaurantCard = ({resData}) => {
    const {restroName, cuisine, rating, deliveryTime} = resData;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={LOGO_URL} />
            <h3>{restroName}</h3>
            <h4>
                {cuisine}
            </h4>
            <h4>
                {rating} stars
            </h4>
            <h4>
                {deliveryTime} minutes
            </h4>
        </div>
    )
};
export default RestaurantCard;