import { searchCocktail } from "@/api/search.api";
import AppLayout from "@/components/AppLayout";
import Card from "@/components/Card";
import ResponsiveWrapper from "@/components/ResponsiveWrapper";
import SearchBar from "@/components/SearchBar";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cocktail, StatusEnum } from "../../models/Cocktails";
import {
  getSearchCocktails,
  getSearchLoading,
  getSearchTerm,
  setSearchCocktails,
  setSearchError,
  setSearchLoading,
  setSearchTerm,
} from "@/store/slices/search.slice";
import { addFavourites } from "@/store/slices/user.slice";

type Props = {};

const Search = (props: Props) => {
  const dispatch = useDispatch();
  const cocktails = useSelector(getSearchCocktails);
  const loading = useSelector(getSearchLoading);
  const searchTerm = useSelector(getSearchTerm);

  const onSearch = async (searchTerm: string) => {
    dispatch(setSearchLoading(true));
    const cocktailData = await searchCocktail({
      name: searchTerm,
    });
    if (cocktailData.status === StatusEnum.OK) {
      dispatch(setSearchCocktails(cocktailData.drinks));
      dispatch(setSearchLoading(false));
    } else {
      dispatch(setSearchCocktails([]));
      dispatch(setSearchError(cocktailData.error));
      dispatch(setSearchLoading(false));
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleAddClick = (cocktail: Cocktail) => {
    dispatch(addFavourites(cocktail));
  };
  return (
    <AppLayout title="Search">
      {/* Add a search bar */}
      <SearchBar
        onSearch={onSearch}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />
      <ResponsiveWrapper>
        {cocktails && (
          <>
            {cocktails.map((cocktail) => (
              <Card
                key={cocktail.strDrink}
                cocktail={cocktail}
                loading={loading}
                add
                handleAddClick={() => {
                  handleAddClick(cocktail);
                }}
              />
            ))}
          </>
        )}
      </ResponsiveWrapper>
    </AppLayout>
  );
};

export default Search;
