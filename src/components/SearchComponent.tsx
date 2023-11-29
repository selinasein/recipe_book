import React from "react";
import MainFeed from "./MainFeed";

function SearchComponent({ searchResult }: any) {
  return (
    <main className="flex min-h-screen flex-col place-self-center items-center justify-between">
      <div className="w-screen h-48 overflow-hidden">
        <img src="images/Banner.jpg" alt="BannerImage"></img>
      </div>

      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-self-auto">
          {searchResult.map((recipe: any) => (
            <MainFeed recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default SearchComponent;
