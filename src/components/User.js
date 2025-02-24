import { useState } from "react";
const User = (props) => {
    const [count, setCount] = useState(0);
    return <div className="user-card" >
        <h1>Count: {count}</h1>
        <button onClick={() => {
            setCount(count + 1);
        }}>Count Increase</button>
        <h2>Name: {props.name}</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: @akshaymarch7</h4>
    </div>
}
export default User;