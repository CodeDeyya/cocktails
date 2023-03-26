import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "./slices/cocktails.slice";
import userReducer from "./slices/user.slice";
import searchReducer from "./slices/search.slice";
export const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
    user: userReducer,
    search: searchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
