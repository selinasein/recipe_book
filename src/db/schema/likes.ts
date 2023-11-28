import { users } from "./users";
import { recipes } from "./recipes";

import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const likes = pgTable("likes", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  recipeId: serial("recipe_id")
    .notNull()
    .references(() => recipes.id),
});
