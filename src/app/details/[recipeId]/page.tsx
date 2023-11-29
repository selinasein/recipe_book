import RecipeDetail from "@/components/RecipeDetail";
import { TComment, commentsQuery } from "@/db/queries/comments";
import { TLikes, likesQuery } from "@/db/queries/likes";
import { TRecipeDetail, query } from "@/db/queries/recipeDetail";

export default async function Details({
  params,
}: {
  params: { recipeId: string };
}) {
  const recipeId = params.recipeId;
  const recipeQuery = query(recipeId);
  const result = await recipeQuery.execute();
  const recipe: TRecipeDetail = result[0];

  const theLikesQuery = likesQuery(parseInt(recipeId));
  const likesResult = await theLikesQuery.execute();
  const likes: TLikes = likesResult;

  const comments: TComment[] = (await commentsQuery.execute()).filter(
    (comment) => comment.recipeId === parseInt(recipeId)
  );

  return <RecipeDetail recipe={recipe} comments={comments} likes={likes} />;
}
