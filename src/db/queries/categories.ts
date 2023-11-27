import { db } from "@/db";
import { categories as categoriesTable } from "../schema/categories";

export default async function categories() {
  const query = await db.select().from(categoriesTable);
  return query;
}

export type TCategory = Awaited<ReturnType<typeof categories>>[0];
