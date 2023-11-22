import Image from "next/image";
import fakeRecipes from "./fakeDb";

export default function Home() {
  const recipes = fakeRecipes;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {fakeRecipes.map((ingredient) => (
          <div className="bg-slate-300 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
            <div className="mb-4">
              {ingredient.image.length > 1 && (
                <Image
                  src={ingredient.image || ""}
                  alt={""}
                  width={400 || ""}
                  height={300 || ""}
                  className="rounded-lg"
                />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-4">{ingredient.title}</h2>
            <p className="text-gray-600 mb-4">{ingredient.description} </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
              <ul className="list-disc ml-4">
                {ingredient.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
              <p className="text-gray-600">{ingredient.instructions}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
