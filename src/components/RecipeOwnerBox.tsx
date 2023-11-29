import { TLikes } from "@/db/queries/likes";
import { TRecipeDetail } from "@/db/queries/recipeDetail";
import Link from "next/link";
import Image from "next/image";
import formatDateString from "@/utils/formatDateString";
import { ownedRecipe } from "@/db/queries/ownedRecipes";

type Props = {
  recipe: TRecipeDetail;
  likes: TLikes;
};

export default async function RecipeOwnerBox({ recipe, likes }: Props) {
  const ownedRecipes = ownedRecipe(recipe.userId);
  const ownedRecipesResult = await ownedRecipes.execute();

  return (
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
              <Image
                src={
                  recipe.userImage ||
                  "https://png.pngtree.com/png-vector/20190728/ourlarge/pngtree-avatar-user-profile-flat-color-icon-vector-icon-banner-png-image_1619399.jpg"
                }
                alt={recipe.userId}
                height="100"
                width="100"
              />
            </div>
          </div>
        </div>
        <div className="stat-value text-md">{recipe.user}</div>
        <div className="stat-title">
          Posted on {formatDateString(recipe.createdAt)}
        </div>
        <div className="stat-desc text-secondary">
          Total Recipes: {ownedRecipesResult.length || 0}
        </div>
      </Link>
    </div>
  );
}
