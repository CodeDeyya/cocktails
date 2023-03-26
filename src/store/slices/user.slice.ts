import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Cocktail } from "../../models/Cocktails";

export interface UserState {
  favourites: Cocktail[];
}

const initialState: UserState = {
  favourites: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavourites: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFavourites: (state, action) => {
      state.favourites = state.favourites.filter((cocktail) => {
        return cocktail.idDrink !== action.payload.idDrink;
      });
    },
    deleteAllFavourites: (state) => {
      state.favourites = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavourites, removeFavourites, deleteAllFavourites } =
  userSlice.actions;
export const getUserFavourites = (state: RootState) => state.user.favourites;

export default userSlice.reducer;
