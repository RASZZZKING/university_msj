/*
  Warnings:

  - Added the required column `id_user` to the `data_alamat_siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `data_calon_siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `data_orangtua` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `data_alamat_siswa` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `data_calon_siswa` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `data_orangtua` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `data_dokumen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` VARCHAR(191) NOT NULL,
    `kartu_keluarga` VARCHAR(191) NOT NULL,
    `akte_kelahiran` VARCHAR(191) NOT NULL,
    `ktp_orang_tua` VARCHAR(191) NOT NULL,
    `skl` VARCHAR(191) NOT NULL,
    `ijazah` VARCHAR(191) NOT NULL,
    `shun_skhun` VARCHAR(191) NOT NULL,
    `rapor` VARCHAR(191) NOT NULL,
    `kartu_nisn` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `data_dokumen_id_user_key`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_pembayaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `nama_pembayaran` VARCHAR(191) NOT NULL,
    `jumlah_pembayaran` VARCHAR(191) NOT NULL,
    `bukti_pembayaran` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `data_pembayaran_id_user_key`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_biaya` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_biaya` VARCHAR(191) NOT NULL,
    `jumlah_biaya` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
