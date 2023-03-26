import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Cocktail } from "../../models/Cocktails";

export interface CocktailsState {
  cocktails: Cocktail[];
  loading: boolean;
  error: string | null;
}

const initialState: CocktailsState = {
  cocktails: [],
  loading: false,
  error: null,
};

export const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    setCocktails: (state, action) => {
      state.cocktails = action.payload;
    },
    setCocktailsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCocktailsError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCocktails, setCocktailsLoading } = cocktailsSlice.actions;
export const getCocktails = (state: RootState) => state.cocktails.cocktails;
export const getCocktailsLoading = (state: RootState) =>
  state.cocktails.loading;
export const getCocktailsError = (state: RootState) => state.cocktails.error;
export default cocktailsSlice.reducer;
