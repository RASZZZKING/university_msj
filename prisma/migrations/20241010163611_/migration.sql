/*
  Warnings:

  - Added the required column `tinggal_bersama` to the `data_alamat_siswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `data_alamat_siswa` ADD COLUMN `tinggal_bersama` VARCHAR(191) NOT NULL;
