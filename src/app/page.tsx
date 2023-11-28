import { query } from "@/db/queries/recipeFeed";
import MainFeed from "../components/MainFeed";
import { db } from "@/db";
import { recipes as myRecipes } from "@/db/schema/recipes";

export default async function Home() {
  const recipes = await query.execute();
  // const myrecipes = await db.select().from(myRecipes);
  console.log(recipes);

  return (
    <main className="flex min-h-screen flex-col place-self-center items-center justify-between">
      <div>
        <div className="w-screen h-48 overflow-hidden">
          <img src="images/Banner.jpg" alt="BannerImage" />
        </div>
        {recipes.length > 0 ? (
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-self-auto">
              {recipes.map((recipe, index) => (
                <MainFeed key={index} recipe={recipe} />
              ))}
            </div>
          </div>
        ) : (
          <div className="p-10 text-center">
            <div className="place-self-auto">There is no recipe</div>
          </div>
        )}
      </div>
    </main>
  );
}
