import { db, eq, desc } from "@/db";
import { recipes as recipesTable } from "../schema/recipes";
import { users as usersTable } from "../schema/users";
import { likes as likesTable } from "../schema/likes";

export const likedQuery = (incomingUserId: string) => {
  return db
    .select({
      id: recipesTable.id,
      recipeId: likesTable.recipeId,
      recipeTitle: recipesTable.title,
      recipeImage: recipesTable.image,
    })
    .from(likesTable)
    .innerJoin(usersTable, eq(usersTable.id, incomingUserId))
    .innerJoin(recipesTable, eq(recipesTable.id, likesTable.recipeId));
};

export type TLiked = Awaited<ReturnType<typeof likedQuery>>[0];
