import { categories } from "./categories";
import { users } from "./users";
import { recipes } from "./recipes";

import {
  serial,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  recipeId: integer("recipe_id")
    .notNull()
    .references(() => recipes.id),
  image: integer("width").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
