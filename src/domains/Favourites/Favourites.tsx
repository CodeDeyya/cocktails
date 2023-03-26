import AppLayout from "@/components/AppLayout";
import Card from "@/components/Card";
import ResponsiveWrapper from "@/components/ResponsiveWrapper";
import { getUserFavourites, removeFavourites } from "@/store/slices/user.slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const Favourites = (props: Props) => {
  const favourites = useSelector(getUserFavourites);
  const dispatch = useDispatch();
  const handleRemove = (cocktail: Cocktail) => {
    dispatch(removeFavourites(cocktail));
  };

  return (
    <AppLayout title="Favourites">
      <ResponsiveWrapper>
        {favourites?.map((cocktail) => (
          <Card
            key={cocktail.strDrink}
            remove
            handleRemoveClick={() => handleRemove(cocktail)}
            cocktail={cocktail}
          />
        ))}
      </ResponsiveWrapper>
    </AppLayout>
  );
};

export default Favourites;
