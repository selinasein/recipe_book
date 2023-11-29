"use server";

import { TRecipe } from "@/db/queries/recipeFeed";
import Link from "next/link";
import Image from "next/image";
import HeartIcon from "./HeartIcon";
import NewIcon from "./NewIcon";
import { likesQuery } from "@/db/queries/likes";
import { auth } from "@/auth";

export default async function MainFeed({ recipe }: { recipe: TRecipe }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const session = await auth();
  const userId = session?.user?.id;

  const theLikesQuery = likesQuery(recipe.id);
  const likesResult = await theLikesQuery.execute();
  const isLiked =
    likesResult.filter((like) => like.userId === userId).length > 0;

  return (
    <div className="card bg-base-100 shadow-xl grid grid-rows-2">
      <div className="w-30 h-60 overflow-hidden rounded-t-lg">
        <div className="relative">
          <NewIcon createdAt={recipe.createdAt} />
          {session && userId ? (
            <HeartIcon isLiked={isLiked} recipeId={recipe.id} />
          ) : null}

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
