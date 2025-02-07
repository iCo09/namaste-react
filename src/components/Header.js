import { useState } from "react";

const Header = () => {
    const[btnNameReact, setbtnNameReact] = useState("Login");

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
                    <button className="login" onClick={() => {
                        btnNameReact === "Login" ?
                        setbtnNameReact("Logout") : setbtnNameReact("Login")}} >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;