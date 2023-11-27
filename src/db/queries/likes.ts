import { db, eq, desc } from "@/db";
import { recipes as recipesTable } from "../schema/recipes";
import { users as usersTable } from "../schema/users";
import { likes as likesTable } from "../schema/likes";

export const likesQuery = (incomingRecipeId: number) => {
  return db
    .select({
      id: likesTable.id,
      userId: likesTable.userId,
      recipeId: likesTable.recipeId,
    })
    .from(likesTable)
    .where(eq(likesTable.recipeId, incomingRecipeId));
};

export type TLikes = Awaited<ReturnType<typeof likesQuery>>;
