const { render, screen, fireEvent } = require("@testing-library/react")
import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should render header component with a login button", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
})


it("Should render cart component with count as 0", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart🛒(0)");

    //Regex
    // const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})

it("Should change Login button to Logout on Clicking", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})

