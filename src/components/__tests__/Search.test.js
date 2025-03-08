import { render, screen, act, fireEvent } from "@testing-library/react";
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

  const cardsBeforeSearch = screen.getAllByTestId("resCard")
  expect(cardsBeforeSearch .length).toBe(8);

  // Now check if button exists
  const searchBtn = screen.getByRole("button", { name: "Search🔎" });

  const searchInput = screen.getByTestId("searchInput");
  expect(searchBtn).toBeInTheDocument();

  fireEvent.change(searchInput, { target: {value: "burger"}});

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
  
});
