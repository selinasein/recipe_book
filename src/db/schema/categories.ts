import { text, varchar, pgTable } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: text("id").primaryKey(),
  category: varchar("title", { length: 100 }).notNull(),
  image: text("image").notNull(),
});
