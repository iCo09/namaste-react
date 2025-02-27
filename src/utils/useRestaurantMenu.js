//custom hook to fetch restaurant menu data
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
    //fetch data

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => { 
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    return resInfo;
}
export default useRestaurantMenu;