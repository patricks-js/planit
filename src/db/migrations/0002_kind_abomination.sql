CREATE TABLE "time_entries" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "time_entries_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"userId" text NOT NULL,
	"taskId" integer NOT NULL,
	"durationMs" integer DEFAULT 0 NOT NULL,
	"startTime" timestamp NOT NULL,
	"endTime" timestamp
);
--> statement-breakpoint
ALTER TABLE "time_entries" ADD CONSTRAINT "time_entries_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "time_entries" ADD CONSTRAINT "time_entries_taskId_tasks_id_fk" FOREIGN KEY ("taskId") REFERENCES "public"."tasks"("id") ON DELETE cascade ON UPDATE no action;