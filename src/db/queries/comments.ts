import { db, eq, desc } from "@/db";
import { recipes as recipesTable } from "../schema/recipes";
import { users as usersTable } from "../schema/users";
import { comments as commentsTable } from "../schema/comments";

export const commentsQuery = db
  .select({
    id: commentsTable.id,
    content: commentsTable.content,
    user: usersTable.name,
    recipeId: commentsTable.recipeId,
    createdAt: commentsTable.createdAt,
  })
  .from(commentsTable)
  .innerJoin(usersTable, eq(usersTable.id, commentsTable.userId))
  .innerJoin(recipesTable, eq(recipesTable.id, commentsTable.recipeId));
// .orderBy(desc(commentsTable.createdAt));

export type TComment = Awaited<ReturnType<typeof commentsQuery.execute>>[0];
