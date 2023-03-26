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

const renderWithRedux = (component: React.ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Home component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

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

    jest.runAllTimers();

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

    mockCocktails.forEach((cocktail) => {
      expect(screen.getByText(cocktail.strDrink)).toBeInTheDocument();
    });
  });

  test("displays an error message when the API request fails", async () => {
    (getRandomCocktails as jest.Mock).mockResolvedValue({
      status: 500,
      error: "An error occurred while fetching the cocktails.",
    });

    renderWithRedux(<Home />);

    await waitFor(() =>
      expect(
        screen.getByText("An error occurred while fetching the cocktails.")
      ).toBeInTheDocument()
    );
  });
});
