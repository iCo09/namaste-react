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

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src="https://tse1.mm.bing.net/th?id=OIP.sBFDF3XzKrprpSea0yGY7wHaE7&pid=Api&P=0&h=180" />
            <h3>Meghana Foods</h3>
            <h4>
                Biryani, North Indian, Asian
            </h4>
            <h4>
                4.4 stars
            </h4>
            <h4>
                38 minutes
            </h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body" >
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

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

