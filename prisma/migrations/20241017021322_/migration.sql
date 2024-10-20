/*
  Warnings:

  - You are about to drop the column `password` on the `account` table. All the data in the column will be lost.
  - Added the required column `jenjang` to the `account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `account` DROP COLUMN `password`,
    ADD COLUMN `jenjang` VARCHAR(191) NOT NULL;
