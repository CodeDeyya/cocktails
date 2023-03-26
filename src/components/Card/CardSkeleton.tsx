import React from "react";

const CardSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 mt-3 bg-gray-200 rounded-lg w-fit animate-pulse">
      <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
      <article className="mt-4 text-center">
        <div className="w-32 h-6 mt-2 bg-gray-400 rounded"></div>
        <div className="w-24 h-4 mt-1 bg-gray-400 rounded"></div>
      </article>
    </div>
  );
};

export default CardSkeleton;
