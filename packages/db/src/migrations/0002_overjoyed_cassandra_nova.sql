ALTER TABLE `user` ADD `theme` text DEFAULT 'system' NOT NULL;--> statement-breakpoint
ALTER TABLE `account` DROP COLUMN `theme`;