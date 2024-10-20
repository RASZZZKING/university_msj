/*
  Warnings:

  - You are about to drop the `calonmahasiswa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `calonmahasiswa`;

-- CreateTable
CREATE TABLE `calon_mahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `nomor` VARCHAR(191) NOT NULL,
    `tahun` INTEGER NOT NULL,
    `gelombang` INTEGER NOT NULL,
    `namaOrangTua` VARCHAR(191) NOT NULL,
    `emailOrangTua` VARCHAR(191) NOT NULL,
    `nomorOrangTua` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `alamatOrangTua` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `jalur` VARCHAR(191) NOT NULL,
    `jenjang` VARCHAR(191) NOT NULL,
    `jurusanAsal` VARCHAR(191) NOT NULL,
    `prodi` VARCHAR(191) NOT NULL,
    `NIK` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
