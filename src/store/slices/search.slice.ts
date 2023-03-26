import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Cocktail } from "../../models/Cocktails";

export interface searchState {
  cocktails: Cocktail[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

const initialState: searchState = {
  cocktails: [],
  loading: false,
  error: null,
  searchTerm: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchCocktails: (state, action) => {
      state.cocktails = action.payload;
    },
    setSearchLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearchError: (state, action) => {
      state.error = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSearchCocktails,
  setSearchLoading,
  setSearchError,
  setSearchTerm,
} = searchSlice.actions;
export const getSearchCocktails = (state: RootState) => state.search.cocktails;
export const getSearchLoading = (state: RootState) => state.search.loading;
export const getSearchError = (state: RootState) => state.search.error;
export const getSearchTerm = (state: RootState) => state.search.searchTerm;

export default searchSlice.reducer;
