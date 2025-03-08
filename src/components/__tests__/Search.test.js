import { render, screen, waitFor, act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA  from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render the body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // Now check if button exists
  const searchBtn = screen.getByRole("button", { name: "Search🔎" });
  expect(searchBtn).toBeInTheDocument();
});
