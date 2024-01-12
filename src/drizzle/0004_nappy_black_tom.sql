DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('pending', 'cancelled', 'active');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "status" "status" DEFAULT 'pending' NOT NULL;