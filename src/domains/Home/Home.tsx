import AppLayout from "@/components/AppLayout";
import Card from "@/components/Card";
import ResponsiveWrapper from "@/components/ResponsiveWrapper";
import { cocktails } from "@/constants/cocktails.constants";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const handleRemoveClick = (id: string) => () => {
    console.log(id);
  };
  return (
    <AppLayout title="Cocktail Bar">
      <ResponsiveWrapper>
        {cocktails.map((cocktail) => (
          <Card
            key={cocktail.strDrink}
            handleRemoveClick={() => {
              handleRemoveClick(cocktail.idDrink);
            }}
            cocktail={cocktail}
          />
        ))}
      </ResponsiveWrapper>
    </AppLayout>
  );
};

export default Home;
