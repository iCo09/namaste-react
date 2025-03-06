import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import { execPath } from "process";

test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})