import { TComment } from "@/db/queries/comments";
import { TRecipeDetail } from "@/db/queries/recipeDetail";
import addComment from "@/actions/addComment";

type Props = {
  recipe: TRecipeDetail;
  comments: TComment[];
};

export default function CommentsBox({ recipe, comments }: Props) {
  return (
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

          <button type="submit" className="btn">
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}
