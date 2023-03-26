import axios from "axios";
import { StatusEnum } from "../../models/Cocktails";
import { getRandomCocktails } from "../../api/home.api";

jest.mock("axios");

describe("getRandomCocktails", () => {
  it("should return a list of random cocktails when successful", async () => {
    const mockData = {
      data: {
        drinks: [
          {
            idDrink: "1",
            strDrink: "Mojito",
          },
        ],
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockData);

    const result = await getRandomCocktails({ count: 2 });

    expect(result.status).toBe(StatusEnum.OK);
    if (result.status !== StatusEnum.OK) return;
    expect(result.drinks).toHaveLength(2);
    expect(result.drinks).toEqual([
      mockData.data.drinks[0],
      mockData.data.drinks[0],
    ]);
  });

  it("should return an error when the request fails", async () => {
    const errorMessage = "Request failed";

    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const result = await getRandomCocktails({ count: 2 });

    expect(result.status).toBe(StatusEnum.ERROR);
    if (result.status === StatusEnum.OK) return;
    expect(result.error).toEqual(errorMessage);
  });
});
