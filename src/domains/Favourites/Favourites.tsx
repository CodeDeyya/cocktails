import AppLayout from "@/components/AppLayout";
import Card from "@/components/Card";
import ResponsiveWrapper from "@/components/ResponsiveWrapper";
import { lovedCocktails } from "@/constants/cocktails.constants";
import React from "react";

type Props = {};

const Favourites = (props: Props) => {
  return (
    <AppLayout title="Favourites">
      <ResponsiveWrapper>
        {lovedCocktails?.map((cocktail) => (
          <Card
            key={cocktail.strDrink}
            remove
            handleRemoveClick={() => console.log(cocktail.idDrink)}
            cocktail={cocktail}
          />
        ))}
      </ResponsiveWrapper>
    </AppLayout>
  );
};

export default Favourites;
