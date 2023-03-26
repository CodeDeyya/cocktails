import AppLayout from "@/components/AppLayout";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import { searchedCocktail } from "@/constants/cocktails.constants";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  const handleAddClick = () => {
    console.log("add");
  };
  return (
    <AppLayout title="Search">
      {/* Add a search bar */}
      <SearchBar onSearch={(searchTerm) => console.log("search", searchTerm)} />
      <div className="flex flex-row items-center justify-center">
        {searchedCocktail && (
          <Card
            cocktail={searchedCocktail}
            add
            handleAddClick={handleAddClick}
          />
        )}
      </div>
    </AppLayout>
  );
};

export default Search;
