"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { comments } from "@/db/schema/comments";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addComment(formData: FormData) {
  const content = formData.get("comment") as string;
  const recipeId = formData.get("recipeId") as string;

  const session = await auth();
  const userId = session?.user.id.toString() as string;

  await db
    .insert(comments)
    .values({ content, userId, recipeId: parseInt(recipeId) })
    .returning();

  revalidatePath(`/details/${recipeId}`);
  redirect(`/details/${recipeId}`);
}
