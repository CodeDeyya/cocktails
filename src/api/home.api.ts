import { Cocktail, StatusEnum, getCocktailsFunc } from "../models/Cocktails";
import axios from "axios";

//function to get random cocktail from the API
export const getRandomCocktails: getCocktailsFunc = async (req) => {
  try {
    const cocktails: Cocktail[] = [];
    const promises: Promise<any>[] = [];
    const getOneCocktail = async (i: number) => {
      // cb param is used to avoid the cached responses as we need random cocktails
      const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php?cb=${i}`;
      const response = await axios.get(url);
      const cocktail = response.data.drinks[0];
      cocktails.push(cocktail);
    };
    for (let i = 0; i < req.count; i++) {
      promises.push(getOneCocktail(i));
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
