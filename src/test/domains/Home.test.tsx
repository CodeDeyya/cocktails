import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { getRandomCocktails } from "@/api/home.api";
import { store } from "@/store/store";
import Home from "@/domains/Home";
import { cocktails } from "@/constants/cocktails.constants";

jest.mock("../../api/home.api");

const mockCocktails = cocktails;
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const renderWithRedux = (component: React.ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Home component", () => {
  test("renders the Home component", () => {
    renderWithRedux(<Home />);
    expect(screen.getByText("Cocktail Bar")).toBeInTheDocument();
  });

  test("fetches and displays cocktails", async () => {
    (getRandomCocktails as jest.Mock).mockResolvedValue({
      status: 200,
      drinks: mockCocktails,
    });
    renderWithRedux(<Home />);
    await waitFor(() => expect(getRandomCocktails).toHaveBeenCalled());
    //wait for the manually added delay to set loading false
    //Do not push to prod used to emulate the delay in api
    await delay(3000);
    mockCocktails.forEach((cocktail) => {
      expect(screen.getByText(cocktail.strDrink)).toBeInTheDocument();
    });
  });

  test("fetches new cocktails when the Refresh Cocktails button is clicked", async () => {
    (getRandomCocktails as jest.Mock).mockResolvedValue({
      status: 200,
      drinks: mockCocktails,
    });

    renderWithRedux(<Home />);
    fireEvent.click(screen.getByText("Refresh Cocktails"));

    await waitFor(() => expect(getRandomCocktails).toHaveBeenCalledTimes(3));
    //wait for the manually added delay to set loading false
    //Do not push to prod used to emulate the delay in api
    await delay(3000);
    mockCocktails.forEach((cocktail) => {
      expect(screen.getByText(cocktail.strDrink)).toBeInTheDocument();
    });
  });
});
