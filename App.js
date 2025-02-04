import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-conatiner">
            <img className="logo" src="https://imgs.search.brave.com/NaO2djcf-A8i93pzwbpBRjUOoivZGoZ6KLE_jlueB3I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9zbW9r/aW5nLWJ1cmdlci13/aXRoLWxldHR1Y2Ut/MzYyNGxkLnBuZz9u/d209MSZud3M9MSZp/bmR1c3RyeT1mb29k/JnNmPSZ0eHRfa2V5/d29yZD1BbGw"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

//props
const RestaurantCard = ({resData}) => {
    const {restroName, cuisine, rating, deliveryTime} = resData;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src="https://tse1.mm.bing.net/th?id=OIP.sBFDF3XzKrprpSea0yGY7wHaE7&pid=Api&P=0&h=180" />
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

const resList = [
    {
        restroId: 1,
        restroName: "Tasty Bites",
        cuisine: "Italian",
        rating: 4.5,
        deliveryTime: 30
    },
    {
        restroId: 2,
        restroName: "Spicy Delight",
        cuisine: "Indian",
        rating: 4.7,
        deliveryTime: 25
    },
    {
        restroId: 3,
        restroName: "Sushi World",
        cuisine: "Japanese",
        rating: 4.8,
        deliveryTime: 40
    },
    {
        restroId: 4,
        restroName: "Burger Haven",
        cuisine: "American",
        rating: 4.3,
        deliveryTime: 20
    },
    {
        restroId: 5,
        restroName: "Green Leaf",
        cuisine: "Vegan",
        rating: 4.6,
        deliveryTime: 35
    }
];

const Body = () => {
    return (
        <div className="body" >
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.restroId} resData = {restaurant}/>
                ))}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app" >
            <Header />
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)

