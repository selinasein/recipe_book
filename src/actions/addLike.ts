"use server";

import { db } from "@/db";
import { likes } from "@/db/schema/likes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function addLike(formData: FormData) {
  const recipeId = formData.get("recipeId") as string;
  const session = await auth();
  const userId = session?.user.id.toString() as string;

  await db
    .insert(likes)
    .values({ userId, recipeId: parseInt(recipeId) })
    .returning();

  revalidatePath(`/details/${recipeId}`);
  revalidatePath(`/`);
  redirect(`/`);
}
