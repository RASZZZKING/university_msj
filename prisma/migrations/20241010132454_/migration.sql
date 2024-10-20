-- CreateTable
CREATE TABLE `data_alamat_siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alamat` VARCHAR(191) NOT NULL,
    `rt` VARCHAR(191) NOT NULL,
    `rw` VARCHAR(191) NOT NULL,
    `desa` VARCHAR(191) NOT NULL,
    `kecamatan` VARCHAR(191) NOT NULL,
    `kabupaten` VARCHAR(191) NOT NULL,
    `provinsi` VARCHAR(191) NOT NULL,
    `kode_pos` VARCHAR(191) NOT NULL,
    `jarak_tempuh` VARCHAR(191) NOT NULL,
    `waktu_tempuh` VARCHAR(191) NOT NULL,
    `transportasi` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_orangtua` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nik_ayah` VARCHAR(191) NOT NULL,
    `nama_ayah` VARCHAR(191) NOT NULL,
    `tempat_lahir_ayah` VARCHAR(191) NOT NULL,
    `tanggal_lahir_ayah` VARCHAR(191) NOT NULL,
    `pendidikan_ayah` VARCHAR(191) NOT NULL,
    `pekerjaan_ayah` VARCHAR(191) NOT NULL,
    `penghasilan_ayah` VARCHAR(191) NOT NULL,
    `no_hp_ayah` VARCHAR(191) NOT NULL,
    `nik_ibu` VARCHAR(191) NOT NULL,
    `nama_ibu` VARCHAR(191) NOT NULL,
    `tempat_lahir_ibu` VARCHAR(191) NOT NULL,
    `tanggal_lahir_ibu` VARCHAR(191) NOT NULL,
    `pendidikan_ibu` VARCHAR(191) NOT NULL,
    `pekerjaan_ibu` VARCHAR(191) NOT NULL,
    `penghasilan_ibu` VARCHAR(191) NOT NULL,
    `no_hp_ibu` VARCHAR(191) NOT NULL,
    `nik_wali` VARCHAR(191) NOT NULL,
    `nama_wali` VARCHAR(191) NOT NULL,
    `tempat_lahir_wali` VARCHAR(191) NOT NULL,
    `tanggal_lahir_wali` VARCHAR(191) NOT NULL,
    `pendidikan_wali` VARCHAR(191) NOT NULL,
    `pekerjaan_wali` VARCHAR(191) NOT NULL,
    `penghasilan_wali` VARCHAR(191) NOT NULL,
    `no_hp_wali` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
