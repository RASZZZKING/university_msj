/*
  Warnings:

  - You are about to drop the column `jarak_tempuh` on the `data_alamat_siswa` table. All the data in the column will be lost.
  - You are about to drop the column `waktu_tempuh` on the `data_alamat_siswa` table. All the data in the column will be lost.
  - Added the required column `jarak_kesekolah` to the `data_alamat_siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waktu_kesekolah` to the `data_alamat_siswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `data_alamat_siswa` DROP COLUMN `jarak_tempuh`,
    DROP COLUMN `waktu_tempuh`,
    ADD COLUMN `jarak_kesekolah` VARCHAR(191) NOT NULL,
    ADD COLUMN `waktu_kesekolah` VARCHAR(191) NOT NULL;
