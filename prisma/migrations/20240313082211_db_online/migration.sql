-- CreateTable
CREATE TABLE "account" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nomor" TEXT NOT NULL,
    "jalur" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calonMahasiswa" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "nomor" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "gelombang" INTEGER NOT NULL,
    "namaOrangTua" TEXT NOT NULL,
    "emailOrangTua" TEXT NOT NULL,
    "nomorOrangTua" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "alamatOrangTua" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "jalur" TEXT NOT NULL,
    "jenjang" TEXT NOT NULL,
    "jurusanAsal" TEXT NOT NULL,
    "prodi" TEXT NOT NULL,
    "NIK" TEXT NOT NULL,

    CONSTRAINT "calonMahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_email_key" ON "account"("email");
