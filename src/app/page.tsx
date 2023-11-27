import { query } from "@/db/queries/recipeFeed";
import MainFeed from "./components/MainFeed";

export default async function Home() {
  const recipes = await query.execute();

  return (
    <main className="flex min-h-screen flex-col place-self-center items-center justify-between">
      <div className="w-screen h-48 overflow-hidden">
        <img src="images/Banner.jpg" alt="BannerImage"></img>
      </div>

      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-self-auto">
          {recipes.map((recipe) => (
            <MainFeed recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  );
}
