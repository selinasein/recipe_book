import { db, eq, desc, like, sql, Column, ColumnBaseConfig, ilike } from "@/db";
import { recipes as recipesTable } from "../schema/recipes";
import { users as usersTable } from "../schema/users";
import { categories as categoriesTable } from "../schema/categories";

export const searchQuery = (q: string) => {
  return db
    .select({
      id: recipesTable.id,
      title: recipesTable.title,
      image: recipesTable.image,
      description: recipesTable.description,
      user: usersTable.firstName,
      category: categoriesTable.category,
      createdAt: recipesTable.createdAt,
    })
    .from(recipesTable)
    .innerJoin(usersTable, eq(usersTable.id, recipesTable.userId))
    .innerJoin(categoriesTable, eq(categoriesTable.id, recipesTable.categoryId))
    // why does string type not work?
    // .where(like(sql<string>`lower(${recipesTable.title})`, `%${q.toLowerCase()}%`))
    .where(ilike(recipesTable.title, `%${q.toLowerCase()}%`))
    .orderBy(desc(recipesTable.createdAt));
};
export type SearchRecipe = Awaited<ReturnType<typeof searchQuery>>[0];
