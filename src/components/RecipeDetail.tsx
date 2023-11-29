import { TComment } from "@/db/queries/comments";
import { TLikes } from "@/db/queries/likes";
import { TRecipeDetail } from "@/db/queries/recipeDetail";
import NewIcon from "./NewIcon";
import RecipeOwnerBox from "./RecipeOwnerBox";
import CommentsBox from "./CommentsBox";

type Props = {
  recipe: TRecipeDetail;
  comments: TComment[];
  likes: TLikes;
};

export default function RecipeDetail({ recipe, comments, likes }: Props) {
  return (
    <div className="m-10 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="card max-h-fit w-120 bg-base-100 shadow-xl row-span-1">
        <figure>
          <img
            src={recipe.image || "/images/NoImageDefault.jpg"}
            alt={recipe.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl items-center justify-center">
            {recipe.title}
          </h2>
          <div className="grid grid-cols-3">
            <p className="col-span-2">{recipe.description}</p>
            <div className="place-self-end">
              <div className="badge badge-neutral">{recipe.category}</div>
            </div>
            <NewIcon createdAt={recipe.createdAt} />
          </div>

          <div className="pt-1">
            <div className="divider divider-start font-bold">Ingredients</div>
            <ul className="list-none p-0">
              {recipe.ingredients.split(",").map((ingredient) => (
                <li key={ingredient}>
                  <div className="grid grid-cols-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="col-span-1"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"
                      />
                    </svg>
                    <div className="col-span-2 place-self-start">
                      {ingredient}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="divider divider-end font-bold">Instructions</div>
            <ol className="list-decimal m-5 text-sm">
              {recipe.instructions
                .split(".")
                .map((instruction, index) =>
                  instruction.length < 1 ? (
                    <li key={index}>Bon Appétit!</li>
                  ) : (
                    <li key={index}>{instruction}</li>
                  )
                )}
            </ol>
          </div>
        </div>
      </div>

      <div className="grid justify-center place-self-start gap-5">
        <RecipeOwnerBox recipe={recipe} likes={likes} />
        <CommentsBox recipe={recipe} comments={comments} />
      </div>
    </div>
  );
}
