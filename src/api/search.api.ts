import { StatusEnum, searchCocktailFunc } from "../models/Cocktails";
import axios from "axios";

export const searchCocktail: searchCocktailFunc = async (req) => {
  try {
    const config = {
      method: "get",
      url: `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.name}`,
      headers: {},
    };
    const response = await axios(config);
    return {
      status: StatusEnum.OK,
      drinks: response.data.drinks,
    };
  } catch (error) {
    return {
      status: StatusEnum.ERROR,
      error: error || "Oops something went wrong",
    };
  }
};
