import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "@/schema";

// for migrations
const migrationClient = postgres(process.env.DB_URL || "", { max: 1 });

migrate(drizzle(migrationClient), { migrationsFolder: "drizzle" });

// for query purposes
const queryClient = postgres(process.env.DB_URL || "");
export const db = drizzle(queryClient, { schema });
