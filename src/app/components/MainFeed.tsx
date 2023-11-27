import { Recipe } from "@/db/queries/recipeFeed";
import Link from "next/link";
import Image from "next/image";
import HeartIcon from "./HeartIcon";
import { likesQuery } from "@/db/queries/likes";

export default async function MainFeed({ recipe }: { recipe: Recipe }) {
  const userId = 1;
  const theLikesQuery = likesQuery(recipe.id);
  const likesResult = await theLikesQuery.execute();
  const isLiked =
    likesResult.filter((like) => like.userId === userId).length > 0;
  return (
    <div className="card bg-base-100 shadow-xl grid grid-rows-2">
      <div className="w-30 h-60 overflow-hidden rounded-t-lg">
        <div className="relative">
          <span className="indicator-item badge badge-primary absolute top-5 left-5 z-10">
            new
          </span>
          <HeartIcon isLiked={isLiked} recipeId={recipe.id} />

          <Image
            src={recipe.image || "/images/NoImageDefault.jpg"}
            alt={recipe.title}
            width="600"
            height="600"
            className="z-0"
          />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{recipe.title}</h2>
        <p>{recipe.description}</p>
        <p>Updated by: {recipe.user}</p>
        <div className="grid grid-cols-2 ">
          <div className="badge badge-neutral place-self-start ">
            {recipe.category}
          </div>
          <Link
            href={`/details/${recipe.id}`}
            className="card-actions md:justify-end"
          >
            <span className="btn btn-primary">Show Detail</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
