/*
  Warnings:

  - Added the required column `foto` to the `data_calon_siswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `data_calon_siswa` ADD COLUMN `foto` VARCHAR(191) NOT NULL;
