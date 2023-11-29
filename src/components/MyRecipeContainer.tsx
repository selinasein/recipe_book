import { TRecipe } from "@/db/queries/recipeFeed";
import Image from "next/image";
import Link from "next/link";

export default function MyRecipeContainer({ recipe }: { recipe: TRecipe }) {
  return (
    <div className="group card w-full h-full bg-base-100 shadow-xl transform transition-transform duration-300 hover:cursor-pointer hover:font-bold">
      <div className="card-body">
        <button className="md:opacity-0 md:group-hover:opacity-100 indicator-item badge badge-secondary absolute top-5 right-5 z-10 drop-shadow-md">
          Delete
        </button>
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
