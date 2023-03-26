import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Cocktail } from "../../models/Cocktails";

export interface searchState {
  cocktail: Cocktail | null;
  loading: boolean;
}

const initialState: searchState = {
  cocktail: null,
  loading: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchCocktail: (state, action) => {
      state.cocktail = action.payload;
    },
    setSearchLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchCocktail, setSearchLoading } = searchSlice.actions;
export const getSearchCocktail = (state: RootState) => state.search.cocktail;

export default searchSlice.reducer;
