"use server";

import { db, and, eq } from "@/db";
import { likes } from "@/db/schema/likes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function deleteLike(formData: FormData) {
  const recipeId = formData.get("recipeId") as string;

  const session = await auth();
  const userId = session?.user.id.toString() as string;

  await db
    .delete(likes)
    .where(
      and(eq(likes.userId, userId), eq(likes.recipeId, parseInt(recipeId)))
    )
    .returning();

  revalidatePath(`/`);
  redirect(`/`);
}
