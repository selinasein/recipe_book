import { categories } from "./categories";
import { users } from "./users";
import {
  integer,
  varchar,
  pgTable,
  text,
  timestamp,
  serial,
} from "drizzle-orm/pg-core";

export const recipes = pgTable("recipes", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  image: text("image").notNull().default("/images/NoImageDefault.jpg"),
  description: text("description").notNull(),
  ingredients: text("ingredients").notNull(),
  instructions: text("instructions").notNull(),
  categoryId: serial("category").references(() => categories.id),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  likes: integer("likes"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
