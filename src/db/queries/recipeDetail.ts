import { db, eq } from "@/db";
import { recipes as recipesTable } from "../schema/recipes";
import { users as usersTable } from "../schema/users";
import { categories as categoriesTable } from "../schema/categories";

export const query = (recipeId: string) => {
  return db
    .select({
      id: recipesTable.id,
      title: recipesTable.title,
      image: recipesTable.image,
      description: recipesTable.description,
      ingredients: recipesTable.ingredients,
      instructions: recipesTable.instructions,
      likes: recipesTable.likes,
      userId: recipesTable.userId,
      user: usersTable.name,
      userImage: usersTable.image,
      category: categoriesTable.category,
      createdAt: recipesTable.createdAt,
    })
    .from(recipesTable)
    .innerJoin(usersTable, eq(usersTable.id, recipesTable.userId))
    .innerJoin(categoriesTable, eq(categoriesTable.id, recipesTable.categoryId))
    .where(eq(recipesTable.id, parseInt(recipeId)));
};

export type TRecipeDetail = Awaited<ReturnType<typeof query>>[0];
