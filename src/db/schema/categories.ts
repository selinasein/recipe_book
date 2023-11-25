import { serial, varchar, integer, pgTable } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  category: varchar("title", { length: 100 }).notNull(),
  image: integer("width").notNull(),
});
