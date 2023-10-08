CREATE TABLE `additionalData` (
	`id` integer PRIMARY KEY NOT NULL,
	`experience` text NOT NULL,
	`education` text NOT NULL,
	`english` text NOT NULL,
	`ukrainian` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `paragraphs` (
	`id` integer PRIMARY KEY NOT NULL,
	`paragraph` text NOT NULL
);
