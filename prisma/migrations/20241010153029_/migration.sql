/*
  Warnings:

  - You are about to drop the column `kabupaten` on the `data_alamat_siswa` table. All the data in the column will be lost.
  - Added the required column `kota` to the `data_alamat_siswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `data_alamat_siswa` DROP COLUMN `kabupaten`,
    ADD COLUMN `kota` VARCHAR(191) NOT NULL;
