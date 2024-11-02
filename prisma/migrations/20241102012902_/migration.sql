-- CreateTable
CREATE TABLE `account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nomor` VARCHAR(191) NOT NULL,
    `jenjang` VARCHAR(191) NOT NULL,
    `jalur` VARCHAR(191) NOT NULL,
    `bukti_bayar_form` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `account_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `data_calon_siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `no_pendaftaran` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `nama_lengkap` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nisn` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(191) NOT NULL,
    `no_kk` VARCHAR(191) NOT NULL,
    `tempat` VARCHAR(191) NOT NULL,
    `tanggal_lahir` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NOT NULL,
    `asal_sekolah` VARCHAR(191) NOT NULL,
    `urutan_anak` VARCHAR(191) NOT NULL,
    `jumlah_saudara` VARCHAR(191) NOT NULL,
    `tinggi_badan` VARCHAR(191) NOT NULL,
    `berat_badan` VARCHAR(191) NOT NULL,
    `status_dalam_keluarga` VARCHAR(191) NOT NULL,
    `kip` VARCHAR(191) NOT NULL,
    `ukuran_baju` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `data_calon_siswa_id_user_key`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_alamat_siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `rt` VARCHAR(191) NOT NULL,
    `rw` VARCHAR(191) NOT NULL,
    `desa` VARCHAR(191) NOT NULL,
    `kecamatan` VARCHAR(191) NOT NULL,
    `kota` VARCHAR(191) NOT NULL,
    `provinsi` VARCHAR(191) NOT NULL,
    `kode_pos` VARCHAR(191) NOT NULL,
    `tinggal_bersama` VARCHAR(191) NOT NULL,
    `jarak_kesekolah` VARCHAR(191) NOT NULL,
    `waktu_kesekolah` VARCHAR(191) NOT NULL,
    `transportasi` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `data_alamat_siswa_id_user_key`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_orangtua` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
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
    `nama_wali` VARCHAR(191) NULL,
    `nik_wali` VARCHAR(191) NULL,
    `tempat_lahir_wali` VARCHAR(191) NULL,
    `tanggal_lahir_wali` VARCHAR(191) NULL,
    `pendidikan_wali` VARCHAR(191) NULL,
    `pekerjaan_wali` VARCHAR(191) NULL,
    `penghasilan_wali` VARCHAR(191) NULL,
    `no_hp_wali` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `data_orangtua_id_user_key`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_dokumen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
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
    `status` VARCHAR(191) NOT NULL,

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
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `data_pembayaran_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_biaya` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_biaya` VARCHAR(191) NOT NULL,
    `jumlah_biaya` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
