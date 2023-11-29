import { db, eq, desc } from "@/db";
import { recipes as recipesTable } from "../schema/recipes";
import { users as usersTable } from "../schema/users";
import { categories as categoriesTable } from "../schema/categories";

export const profileQuery = (q: string) => {
  if (q) {
    return db
      .select({
        id: recipesTable.id,
        title: recipesTable.title,
        image: recipesTable.image,
        description: recipesTable.description,
        user: usersTable.name,
        userEmail: usersTable.email,
        userImage: usersTable.image,
        userId: recipesTable.userId,
        category: categoriesTable.category,
        createdAt: recipesTable.createdAt,
      })
      .from(recipesTable)
      .innerJoin(usersTable, eq(usersTable.id, recipesTable.userId))
      .innerJoin(
        categoriesTable,
        eq(categoriesTable.id, recipesTable.categoryId)
      )
      .where(eq(recipesTable.userId, q));
  }
};
// .orderBy(desc(recipesTable.createdAt));
// why does this line hide the recipe?

export type TProfile = Awaited<ReturnType<typeof profileQuery>>;
