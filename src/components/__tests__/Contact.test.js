import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
    test("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        //assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact us component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        //assertion
        expect(button).toBeInTheDocument();
    });
})

