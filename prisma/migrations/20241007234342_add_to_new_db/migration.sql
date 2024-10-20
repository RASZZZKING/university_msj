-- CreateTable
CREATE TABLE `account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nomor` VARCHAR(191) NOT NULL,
    `jalur` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `account_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `calonMahasiswa` (
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
