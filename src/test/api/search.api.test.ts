import { searchCocktail } from "@/api/search.api";
import axios from "axios";
import { StatusEnum } from "../../models/Cocktails";

jest.mock("axios");

describe("searchCocktail", () => {
  it("should return a list of cocktails when the request is successful", async () => {
    // Set up the expected response
    const res = {
      data: {
        drinks: [
          {
            idDrink: "11007",
            strDrink: "Margarita",
          },
        ],
      },
    };

    // Mock the axios request and resolve with the expected response
    // @ts-ignore
    axios.get.mockResolvedValueOnce(res);

    // Wait for the searchCocktail function to complete
    const result = await searchCocktail({ name: "mar" });

    // Check if the searchCocktail function returns the expected result
    expect(result).toEqual({
      status: StatusEnum.OK,
      drinks: res.data.drinks,
    });

    // Check if the axios request was called with the correct arguments
    expect(axios.get).toHaveBeenCalledWith(
      "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=mar"
    );
  });

  it("should return an error when the search fails", async () => {
    const errorMessage = "No cocktails found";
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));
    const result = await searchCocktail({ name: "NonExistentCocktail" });
    expect(result.status).toBe(StatusEnum.ERROR);
    if (result.status === StatusEnum.OK) return;
    expect(result.error).toEqual(errorMessage);
  });
});
