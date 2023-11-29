import { db, eq, desc } from "@/db";
import { recipes as recipesTable } from "../schema/recipes";
import { users as usersTable } from "../schema/users";
import { likes as likesTable } from "../schema/likes";

export const ownedRecipe = (incomingUserId: string) => {
  return db
    .select({
      id: recipesTable.id,
      recipeTitle: recipesTable.title,
      recipeImage: recipesTable.image,
      recipeUserId: recipesTable.userId,
    })
    .from(recipesTable)
    .where(eq(recipesTable.userId, incomingUserId));
};

export type TOwnedRecipe = Awaited<ReturnType<typeof ownedRecipe>>[0];
