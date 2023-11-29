import { db } from "@/db";
import { categories as categoriesTable } from "../schema/categories";

export const categoryQuery = db.select().from(categoriesTable);

export type TCategory = Awaited<ReturnType<typeof categoryQuery.execute>>[0];
