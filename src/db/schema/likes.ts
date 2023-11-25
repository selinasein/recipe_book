import { users } from "./users";
import { recipes } from "./recipes";

import {
  serial,
  varchar,
  integer,
  pgTable,
  pgEnum,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const likes = pgTable("likes", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  recipeId: integer("recipe_id")
    .notNull()
    .references(() => recipes.id),
});
