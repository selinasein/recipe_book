"use server";

import { db, and, eq } from "@/db";
import { likes } from "@/db/schema/likes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteLike(formData: FormData) {
  const recipeId = formData.get("recipeId") as string;
  const userId = 1; // Assuming a static user ID, you may adjust this accordingly

  // Delete the like based on userId and recipeId
  await db
    .delete(likes)
    .where(
      and(eq(likes.userId, userId), eq(likes.recipeId, parseInt(recipeId)))
    )
    .returning();

  // Perform any additional actions or redirects as needed
  revalidatePath(`/`);
  redirect(`/`);
}
