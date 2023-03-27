import { StatusEnum, searchCocktailFunc } from "../models/Cocktails";
import axios from "axios";

//function to search for a cocktail by name
export const searchCocktail: searchCocktailFunc = async (req) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.name}`;
    const response = await axios.get(url);
    if (!response.data.drinks) {
      throw new Error("No cocktails found");
    }
    return {
      status: StatusEnum.OK,
      drinks: response.data.drinks,
    };
  } catch (error) {
    return {
      status: StatusEnum.ERROR,
      error:
        error instanceof Error ? error.message : "Oops something went wrong",
    };
  }
};
