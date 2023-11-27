"use server";

import { db } from "@/db";
import { comments } from "@/db/schema/comments";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addComment(formData: FormData) {
  const comment = formData.get("comment") as string;
  const recipeId = formData.get("recipeId") as string;
  await db
    .insert(comments)
    .values({ content: comment, userId: 1, recipeId: parseInt(recipeId) })
    .returning();

  revalidatePath(`/details/${recipeId}`);
  redirect(`/details/${recipeId}`);
}
