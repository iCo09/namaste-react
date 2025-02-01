import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before it reaches to JS engine so react can understand) => transpiling is done by parcel => babel

//JSX -> React.creatElement -> ReactElement-JS object -> HTMLElement(render)

const Title = () => (
<h1 id="heading">
    Namaste from JSX🚀
    </h1>
);

const data = 1000;
 
//React Functional Component -> A normal JS function which returns JSX code
const HeadingComponent = () => (
    <div id="container"> 
    <Title/>
    {Title()}
    <h1>Namaste React Functional Component🚀</h1>
    </div>  
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<HeadingComponent/>)

