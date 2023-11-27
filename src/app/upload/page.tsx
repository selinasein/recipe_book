"use server";

import categories from "@/db/queries/categories";
import CreateRecipeClient from "../components/CreateRecipeClient";

export default async function Upload() {
  const categoriesList = await categories();
  console.log("hello");
  console.log(categoriesList);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="text-white p-4 overflow-hidden hidden md:block">
        <img
          src="images/LeftBanner.jpg"
          alt="BannerImage"
          className="w-full h-full object-cover"
        />
      </div>
      <CreateRecipeClient categories={categoriesList} />
    </div>
  );
}
