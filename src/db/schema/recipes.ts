import { categories } from "./categories";
import { users } from "./users";
import {
  serial,
  varchar,
  integer,
  pgTable,
  pgEnum,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

// export const mediaType = pgEnum("media_type", ["image", "video"]);

export const recipes = pgTable("recipes", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  image: integer("width"),
  description: text("description").notNull(),
  ingredients: text("ingredients").notNull(),
  instructions: text("instructions").notNull(),
  categoryId: integer("category").references(() => categories.id),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  likes: integer("likes"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
