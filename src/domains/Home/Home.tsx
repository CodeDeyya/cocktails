import { getRandomCocktails } from "@/api/home.api";
import AppLayout from "@/components/AppLayout";
import Card from "@/components/Card";
import ResponsiveWrapper from "@/components/ResponsiveWrapper";
import {
  getCocktails,
  getCocktailsError,
  getCocktailsLoading,
  setCocktails,
  setCocktailsError,
  setCocktailsLoading,
} from "@/store/slices/cocktails.slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusEnum } from "../../models/Cocktails";
import MessageBox from "@/components/MessageBox";
import { cocktailsOnHomePageCount } from "@/constants/cocktails.constants";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  const cocktails = useSelector(getCocktails);
  const loading = useSelector(getCocktailsLoading);
  const error = useSelector(getCocktailsError);
  //function to get the cocktails from the api
  const getCocktailsApi = async () => {
    dispatch(setCocktails([]));
    dispatch(setCocktailsLoading(true));
    let newRandomCocktailsData = await getRandomCocktails({
      count: cocktailsOnHomePageCount,
    });
    if (!newRandomCocktailsData) return;
    if (newRandomCocktailsData.status === StatusEnum.OK) {
      dispatch(setCocktails(newRandomCocktailsData.drinks));
      //Do not push to prod used to emulate the delay in api
      setTimeout(() => {
        dispatch(setCocktailsLoading(false));
      }, 1000);
    } else {
      dispatch(setCocktailsError(newRandomCocktailsData.error));
      dispatch(setCocktailsLoading(false));
    }
  };

  useEffect(() => {
    //only load the data if the cocktails array is empty
    if (cocktails.length === 0) {
      getCocktailsApi();
    }
  }, []);

  return (
    <AppLayout title="Cocktail Bar">
      <div className="flex flex-row justify-center">
        <button
          onClick={getCocktailsApi}
          className="w-full max-w-xs p-2 my-3 text-white bg-blue-500 rounded-md md:max-w-7xl"
        >
          Refresh Cocktails
        </button>
      </div>
      <ResponsiveWrapper>
        {cocktails.map((cocktail) => (
          <Card key={cocktail.strDrink} cocktail={cocktail} loading={loading} />
        ))}
      </ResponsiveWrapper>
      {error && <MessageBox message={error} type="error" />}
    </AppLayout>
  );
};

export default Home;
