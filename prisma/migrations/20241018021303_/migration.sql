/*
  Warnings:

  - You are about to alter the column `id_user` on the `data_alamat_siswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_user` on the `data_calon_siswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_user` on the `data_dokumen` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_user` on the `data_orangtua` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[id_user]` on the table `data_alamat_siswa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_user]` on the table `data_calon_siswa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_user]` on the table `data_orangtua` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `data_alamat_siswa` MODIFY `id_user` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `data_calon_siswa` MODIFY `id_user` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `data_dokumen` MODIFY `id_user` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `data_orangtua` ADD COLUMN `status` VARCHAR(191) NULL,
    MODIFY `nik_wali` VARCHAR(191) NULL,
    MODIFY `nama_wali` VARCHAR(191) NULL,
    MODIFY `tempat_lahir_wali` VARCHAR(191) NULL,
    MODIFY `tanggal_lahir_wali` VARCHAR(191) NULL,
    MODIFY `pendidikan_wali` VARCHAR(191) NULL,
    MODIFY `pekerjaan_wali` VARCHAR(191) NULL,
    MODIFY `penghasilan_wali` VARCHAR(191) NULL,
    MODIFY `no_hp_wali` VARCHAR(191) NULL,
    MODIFY `id_user` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `data_alamat_siswa_id_user_key` ON `data_alamat_siswa`(`id_user`);

-- CreateIndex
CREATE UNIQUE INDEX `data_calon_siswa_id_user_key` ON `data_calon_siswa`(`id_user`);

-- CreateIndex
CREATE UNIQUE INDEX `data_orangtua_id_user_key` ON `data_orangtua`(`id_user`);
