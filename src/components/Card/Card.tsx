import Image from "next/image";
import React from "react";
import { Cocktail } from "../../models/Cocktails";
import CardSkeleton from "./CardSkeleton";

type Props = {
  handleAddClick?: () => void;
  handleRemoveClick?: () => void;
  cocktail: Cocktail;
  remove?: boolean;
  add?: boolean;
  loading?: boolean;
};

const Card = (props: Props) => {
  if (props.loading) {
    return <CardSkeleton />;
  }
  return (
    <div className="flex flex-col items-center justify-center p-5 mt-3 rounded-lg w-fit ">
      <Image
        alt="Vodka Martini"
        className="object-cover border border-gray-500 rounded-lg"
        src={props.cocktail.strDrinkThumb}
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL="/placeholder.png"
      />
      <article className="mt-4 text-center">
        <h1 className="text-2xl font-bold">{props.cocktail.strDrink}</h1>
        <p className="text-sm text-gray-500">{props.cocktail.strCategory}</p>
      </article>
      {props.add && (
        <button
          onClick={props.handleAddClick}
          className="px-4 py-2 mt-4 text-white bg-black border border-white rounded-lg hover:scale-[1.1] hover:bg-white hover:text-black"
        >
          Add 🍸
        </button>
      )}
      {props.remove && (
        <button
          onClick={props.handleRemoveClick}
          className="px-4 py-2 mt-4 text-white bg-black border border-red-500 rounded-lg hover:scale-[1.1] hover:bg-red-500 hover:text-white"
        >
          Remove 🍸
        </button>
      )}
    </div>
  );
};

export default Card;
