import { users } from "./users";
import { recipes } from "./recipes";

import { integer, pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  userId: serial("user_id")
    .notNull()
    .references(() => users.id),
  recipeId: serial("recipe_id")
    .notNull()
    .references(() => recipes.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
