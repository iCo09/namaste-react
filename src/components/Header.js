import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const[btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm: bg-yellow-50 lg: bg-green-50">
            <div className="logo-conatiner">
            <img className="w-56" src="https://imgs.search.brave.com/NaO2djcf-A8i93pzwbpBRjUOoivZGoZ6KLE_jlueB3I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9zbW9r/aW5nLWJ1cmdlci13/aXRoLWxldHR1Y2Ut/MzYyNGxkLnBuZz9u/d209MSZud3M9MSZp/bmR1c3RyeT1mb29k/JnNmPSZ0eHRfa2V5/d29yZD1BbGw"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4" >
                      Online Status: {onlineStatus ? "✅" : "🔴" }
                    </li>
                    <li className="px-4" > <Link to="/" >Home</Link></li>
                    <li> <Link to="/about" >About Us</Link></li>
                    <li className="px-4" > <Link to="/contact"> Contact Us </Link> </li>
                    <li> <Link to="/grocery"> Grocery </Link> </li>
                    <li className="px-4" >Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login" ?
                        setbtnNameReact("Logout") : setbtnNameReact("Login")}} >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;