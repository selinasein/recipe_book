"use server";

import { db } from "@/db";
import { comments } from "@/db/schema/comments";
import { likes } from "@/db/schema/likes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addLike(formData: FormData) {
  const recipeId = formData.get("recipeId") as string;
  await db
    .insert(likes)
    .values({ userId: 1, recipeId: parseInt(recipeId) })
    .returning();

  revalidatePath(`/`);
  redirect(`/`);
}
