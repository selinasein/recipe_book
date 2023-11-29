"use server";

import { db, and, eq } from "@/db";
import { likes } from "@/db/schema/likes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { recipes } from "@/db/schema/recipes";
import { comments } from "@/db/schema/comments";

export default async function deleteRecipe(formData: FormData) {
  const recipeId = formData.get("recipeId") as string;

  const session = await auth();

  if (session?.user.id.toString() === formData.get("userId")) {
    await db
      .delete(comments)
      .where(and(eq(comments.recipeId, parseInt(recipeId))));

    await db.delete(likes).where(and(eq(likes.recipeId, parseInt(recipeId))));

    await db
      .delete(recipes)
      .where(and(eq(recipes.id, parseInt(recipeId))))
      .returning();
  } else {
    return console.error("You are not authorized to delete this recipe");
  }

  revalidatePath(`/me`);
  redirect(`/me`);
}
