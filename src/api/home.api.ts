import { Cocktail, StatusEnum, getCocktailsFunc } from "../models/Cocktails";
import axios from "axios";

export const getRandomCocktails: getCocktailsFunc = async (req) => {
  try {
    const cocktails: Cocktail[] = [];
    const promises: Promise<any>[] = [];
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const getOneCocktail = async () => {
      const response = await axios.get(url);
      const cocktail = response.data.drinks[0];
      cocktails.push(cocktail);
    };
    for (let i = 0; i < req.count; i++) {
      promises.push(getOneCocktail());
    }
    await Promise.all(promises);
    return {
      status: StatusEnum.OK,
      drinks: cocktails,
    };
  } catch (err) {
    return {
      status: StatusEnum.ERROR,
      error: err instanceof Error ? err.message : "Oops something went wrong",
    };
  }
};
