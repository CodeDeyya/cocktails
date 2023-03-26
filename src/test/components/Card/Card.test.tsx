import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cocktail } from "../../../models/Cocktails";
import Card from "@/components/Card";

describe("Card", () => {
  const mockCocktail: Cocktail = {
    idDrink: "1",
    strDrink: "Mojito",
    strDrinkThumb: "https://example.com/image.jpg",
    strCategory: "Cocktail",
  };

  it("renders the card with the provided cocktail data", () => {
    render(<Card cocktail={mockCocktail} />);

    expect(screen.getByText(mockCocktail.strDrink)).toBeInTheDocument();
    expect(screen.getByText(mockCocktail.strCategory)).toBeInTheDocument();
  });

  it("does not render the cocktail category when add or remove prop is true", () => {
    render(<Card cocktail={mockCocktail} add />);
    expect(
      screen.queryByText(mockCocktail.strCategory)
    ).not.toBeInTheDocument();

    render(<Card cocktail={mockCocktail} remove />);
    expect(
      screen.queryByText(mockCocktail.strCategory)
    ).not.toBeInTheDocument();
  });

  it("renders the 'Add' button and calls handleAddClick when clicked", () => {
    const handleAddClick = jest.fn();
    render(
      <Card cocktail={mockCocktail} add handleAddClick={handleAddClick} />
    );

    const addButton = screen.getByText("Add 🍸");
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);
    expect(handleAddClick).toHaveBeenCalledTimes(1);
  });

  it("renders the 'Remove' button and calls handleRemoveClick when clicked", () => {
    const handleRemoveClick = jest.fn();
    render(
      <Card
        cocktail={mockCocktail}
        remove
        handleRemoveClick={handleRemoveClick}
      />
    );

    const removeButton = screen.getByText("Remove 🍸");
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);
    expect(handleRemoveClick).toHaveBeenCalledTimes(1);
  });

  it("renders the CardSkeleton when loading is true", () => {
    render(<Card cocktail={mockCocktail} loading />);

    expect(screen.getByTestId("card-skeleton")).toBeInTheDocument();
  });
});
