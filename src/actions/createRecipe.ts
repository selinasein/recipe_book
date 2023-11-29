"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { recipes } from "@/db/schema/recipes";
import { revalidatePath } from "next/cache";

export async function createRecipe(
  imgUrl: string,
  recipeTitle: string,
  recipeDescription: string,
  recipeIngredients: string,
  recipeInstructions: string,
  recipeCategory: string
) {
  const session = await auth();

  if (!session) {
    return { failure: "not authenticated" };
  }

  const results = await db
    .insert(recipes)
    .values({
      title: recipeTitle,
      description: recipeDescription,
      ingredients: recipeIngredients,
      instructions: recipeInstructions,
      categoryId: parseInt(recipeCategory),
      likes: 0,
      image: imgUrl,
      userId: session.user.id,
    })
    .returning({ insertedId: recipes.id });

  revalidatePath("/");

  return results;
}
