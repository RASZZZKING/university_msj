/*
  Warnings:

  - Added the required column `status` to the `data_alamat_siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `data_calon_siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `data_dokumen` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `data_orangtua` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `data_alamat_siswa` ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `data_calon_siswa` ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `data_dokumen` ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `data_orangtua` MODIFY `status` VARCHAR(191) NOT NULL;
