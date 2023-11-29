import { TRecipe } from "@/db/queries/recipeFeed";
import Image from "next/image";
import Link from "next/link";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function MyRecipeContainer({
  recipe,
  hideDelete,
}: {
  hideDelete: boolean;
  recipe: TRecipe;
}) {
  return (
    <div className="group card w-full h-full bg-base-100 shadow-xl transform transition-transform duration-300 hover:font-bold">
      <div className="card-body">
        <DeleteRecipeButton
          hideDelete={hideDelete}
          recipeId={recipe.id}
          userId={recipe.userId}
        />
        <h2 className="card-title">{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
      <Link href={`/details/${recipe.id}`}>
        <figure className="w-full h-40 overflow-hidden ">
          <Image
            src={recipe.image || "/images/NoImageDefault.jpg"}
            alt={recipe.title}
            height="600"
            width="600"
          />
        </figure>
      </Link>
    </div>
  );
}
