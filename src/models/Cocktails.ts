export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
};

export enum StatusEnum {
  OK = 200,
  CREATED = 201,
  ERROR = 400,
  SERVER_ERROR = 500,
}
export type HttpErrorResponse = {
  status: StatusEnum.ERROR | StatusEnum.SERVER_ERROR;
  error: object | string;
};

export type getCocktailsReq = {
  count: number;
};

export type getCocktailsRes =
  | {
      status: StatusEnum.OK;
      drinks: Cocktail[];
    }
  | HttpErrorResponse;

export type getCocktailsFunc = (
  req: getCocktailsReq
) => Promise<getCocktailsRes>;

export type searchCocktailReq = {
  name: string;
};

export type searchCocktailRes =
  | {
      status: StatusEnum.OK;
      drinks: Cocktail[];
    }
  | HttpErrorResponse;

export type searchCocktailFunc = (
  req: searchCocktailReq
) => Promise<searchCocktailRes>;
