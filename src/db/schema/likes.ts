import { users } from "./users";
import { recipes } from "./recipes";

import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const likes = pgTable("likes", {
  id: text("id").primaryKey(),
  userId: serial("user_id")
    .notNull()
    .references(() => users.id),
  recipeId: text("recipe_id")
    .notNull()
    .references(() => recipes.id),
});
