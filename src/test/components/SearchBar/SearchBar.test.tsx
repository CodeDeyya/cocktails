import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "@/components/SearchBar";

describe("SearchBar", () => {
  const onSearch = jest.fn();
  const handleSearchChange = jest.fn();
  const searchTerm = "Mojito";

  it("renders the search bar with the provided searchTerm", () => {
    render(
      <SearchBar
        onSearch={onSearch}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
    );

    expect(screen.getByPlaceholderText("Search...")).toHaveValue(searchTerm);
  });

  it("calls handleSearchChange on input change", () => {
    render(
      <SearchBar
        onSearch={onSearch}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
    );

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Martini" } });

    expect(handleSearchChange).toHaveBeenCalledTimes(1);
  });

  it("calls onSearch on form submit", () => {
    render(
      <SearchBar
        onSearch={onSearch}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
    );

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith(searchTerm);
  });
});
