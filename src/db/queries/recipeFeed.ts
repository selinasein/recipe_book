import { db, eq, desc } from "@/db";
import { recipes as recipesTable } from "../schema/recipes";
import { users as usersTable } from "../schema/users";
import { categories as categoriesTable } from "../schema/categories";

export const query = (q: string | null) => {
  if (q) {
    return db
      .select({
        id: recipesTable.id,
        title: recipesTable.title,
        image: recipesTable.image,
        description: recipesTable.description,
        user: usersTable.name,
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
      .where(eq(recipesTable.categoryId, parseInt(q)));
  } else {
    return db
      .select({
        id: recipesTable.id,
        title: recipesTable.title,
        image: recipesTable.image,
        description: recipesTable.description,
        user: usersTable.name,
        userId: recipesTable.userId,
        category: categoriesTable.category,
        createdAt: recipesTable.createdAt,
      })
      .from(recipesTable)
      .innerJoin(usersTable, eq(usersTable.id, recipesTable.userId))
      .innerJoin(
        categoriesTable,
        eq(categoriesTable.id, recipesTable.categoryId)
      );
  }
};
// .orderBy(desc(recipesTable.createdAt));
// why does this line hide the recipe?

export type TRecipe = Awaited<ReturnType<typeof query>>[0];
