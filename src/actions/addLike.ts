"use server";

import { db } from "@/db";
import { likes } from "@/db/schema/likes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addLike(formData: FormData) {
  const recipeId = formData.get("recipeId") as string;

  const userId = 1; // Assuming a static user ID, you may adjust this accordingly

  await db
    .insert(likes)
    .values({ userId, recipeId: parseInt(recipeId) })
    .returning();

  revalidatePath(`/`);
  redirect(`/`);
}
