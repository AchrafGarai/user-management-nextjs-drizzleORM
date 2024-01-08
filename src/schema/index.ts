import { date, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	firstName: varchar("first_name", { length: 256 }).notNull(),
	lastName: varchar("last_name", { length: 256 }).notNull(),
	email: varchar("email", { length: 256 }).notNull(),
	avatar: varchar("avatar", { length: 256 }).default("default-avatar.svg"),
	createdAt: date("created_at").defaultNow(),
});
