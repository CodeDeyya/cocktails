import { searchCocktail } from "@/api/search.api";
import AppLayout from "@/components/AppLayout";
import Card from "@/components/Card";
import ResponsiveWrapper from "@/components/ResponsiveWrapper";
import SearchBar from "@/components/SearchBar";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cocktail, StatusEnum } from "../../models/Cocktails";
import {
  getSearchCocktails,
  getSearchError,
  getSearchLoading,
  getSearchTerm,
  setSearchCocktails,
  setSearchError,
  setSearchLoading,
  setSearchTerm,
} from "@/store/slices/search.slice";
import { addFavourites, getUserFavourites } from "@/store/slices/user.slice";
import MessageBox from "@/components/MessageBox";

type Props = {};

const Search = (props: Props) => {
  const [success, setSuccess] = React.useState<boolean>(false);
  const [successMessage, setSuccessMessage] = React.useState<string>(
    "Added to favourites"
  );
  const dispatch = useDispatch();
  const cocktails = useSelector(getSearchCocktails);
  const loading = useSelector(getSearchLoading);
  const searchTerm = useSelector(getSearchTerm);
  const error = useSelector(getSearchError);
  const favourites = useSelector(getUserFavourites);

  const onSearch = async (searchTerm: string) => {
    dispatch(setSearchLoading(true));
    dispatch(setSearchError(null));
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (success) {
        setSuccess(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [success]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleAddClick = (cocktail: Cocktail) => {
    setSuccessMessage("Added to favourites");
    //check if the cocktail is already in the favourites
    const isFavourite = favourites.find(
      (favourite) => favourite.idDrink === cocktail.idDrink
    );
    if (isFavourite) {
      setSuccessMessage("Already in favourites");
      setSuccess(true);
      return;
    }
    dispatch(addFavourites(cocktail));
    setSuccess(true);
  };
  return (
    <AppLayout title="Search">
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
                added={
                  !!favourites.find(
                    (favourite) => favourite.idDrink === cocktail.idDrink
                  )
                }
                add
                handleAddClick={() => {
                  handleAddClick(cocktail);
                }}
              />
            ))}
          </>
        )}
      </ResponsiveWrapper>
      {error && <MessageBox message={error} type="error" />}
      {success && (
        <MessageBox duration={600} message={successMessage} type="success" />
      )}
    </AppLayout>
  );
};

export default Search;
