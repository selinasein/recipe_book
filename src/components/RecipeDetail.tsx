import addComment from "@/actions/addComment";
import { TComment } from "@/db/queries/comments";
import { TLikes } from "@/db/queries/likes";
import { TRecipeDetail } from "@/db/queries/recipeDetail";
import Link from "next/link";
import formatDateString from "@/utils/formatDateString";
import NewIcon from "./NewIcon";

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
        <div className="stats shadow-xl border border-gray-200 max-h-50">
          <div className="stat">
            <div className="stat-figure text-primary"></div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">{likes.length || 0}</div>
            <div className="stat-desc">
              {recipe.likes} People like this recipe !
            </div>
          </div>

          <Link
            href={`/profile/${recipe.userId}`}
            className="stat  hover:bg-slate-200"
          >
            <div className="stat-figure text-secondary">
              <div className="avatar">
                <div className=" rounded-full">
                  <img src="https://placekitten.com/150/150" />
                </div>
              </div>
            </div>
            <div className="stat-value text-md">{recipe.user}</div>
            <div className="stat-title">
              Posted on {formatDateString(recipe.createdAt)}
            </div>
            <div className="stat-desc text-secondary">Total Recipes: 13</div>
          </Link>
        </div>
        <div className="w-full rounded-xl bg-base-100 shadow-xl border p-3">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <div className="divider divider-primary "></div>

          {
            <ul className="list-none p-0 max-h-96 overflow-auto ">
              {comments.map((comment) => (
                <li key={comment.id} className="mb-2">
                  <strong>{comment.user}:</strong> {comment.content}
                </li>
              ))}
            </ul>
          }
          <div className="divider divider-primary">Leave comments here !</div>
          <div className="p-3 grid grid-cols-2">
            <form action={addComment} key={Date.now()}>
              <textarea
                name="comment"
                placeholder="Leave a comment here..."
                className="textarea textarea-bordered textarea-lg w-full max-w-lg"
              ></textarea>
              <input type="hidden" name="recipeId" value={recipe.id} />

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
              >
                Add Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
