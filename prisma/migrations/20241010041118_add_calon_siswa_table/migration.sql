-- CreateTable
CREATE TABLE `data_calon_siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_pendaftaran` VARCHAR(191) NOT NULL,
    `nisn` INTEGER NOT NULL,
    `nik` INTEGER NOT NULL,
    `no_kk` INTEGER NOT NULL,
    `nama_lengkap` VARCHAR(191) NOT NULL,
    `tempat` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tanggal_lahir` INTEGER NOT NULL,
    `no_hp` INTEGER NOT NULL,
    `asal_sekolah` VARCHAR(191) NOT NULL,
    `urutan_anak` INTEGER NOT NULL,
    `jumlah_saudara` INTEGER NOT NULL,
    `tinggi_badan` INTEGER NOT NULL,
    `berat_badan` INTEGER NOT NULL,
    `status_dalam_keluarga` VARCHAR(191) NOT NULL,
    `kip` INTEGER NOT NULL,
    `ukuran_baju` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
