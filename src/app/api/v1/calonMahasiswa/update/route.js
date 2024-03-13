import prisma from "@/models/libs/prisma";

export async function POST(request) {
  const {
    id,
    email,
    nama,
    nomor,
    tahun,
    gelombang,
    namaOrangTua,
    emailOrangTua,
    nomorOrangTua,
    alamat,
    alamatOrangTua,
    password,
    jalur,
    jenjang,
    jurusanAsal,
    prodi,
    NIK,
  } = await request.json();
  const data = {
    id,
    email,
    nama,
    nomor,
    tahun,
    gelombang,
    namaOrangTua,
    emailOrangTua,
    nomorOrangTua,
    alamat,
    alamatOrangTua,
    password,
    jalur,
    jenjang,
    jurusanAsal,
    prodi,
    NIK,
  };


  const updateFullData = await prisma.calonMahasiswa.update({
    where: { id: data.id },
    data: data,
  });

  if (!updateFullData) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
