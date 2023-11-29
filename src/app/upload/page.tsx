"use server";

import { categoryQuery } from "@/db/queries/categories";
import CreateRecipeClient from "../../components/CreateRecipeClient";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Upload() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/upload");
  }
  const categoriesList = await categoryQuery.execute();

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
