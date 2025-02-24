import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <User name={"Akshay Saini by function"}/>
            </div>
        )
    }
}


export default About;