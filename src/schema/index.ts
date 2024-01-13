import { date, pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["pending", "cancelled", "active"]);

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	firstName: varchar("first_name", { length: 256 }),
	lastName: varchar("last_name", { length: 256 }),
	email: varchar("email", { length: 256 }).notNull().unique(),
	avatar: varchar("avatar", { length: 256 }).default("default-avatar.svg"),
	createdAt: date("created_at").defaultNow(),
	status: statusEnum("status").notNull().default("pending"),
});
export type User = typeof users.$inferSelect;
