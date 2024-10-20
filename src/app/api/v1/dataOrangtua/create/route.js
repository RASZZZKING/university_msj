import prisma from "@/models/libs/prisma";

export async function POST(request) {
  const {
    id_user,
    nik_ayah,
    nama_ayah,
    tempat_lahir_ayah,
    tanggal_lahir_ayah,
    pendidikan_ayah,
    pekerjaan_ayah,
    penghasilan_ayah,
    no_hp_ayah,
    nik_ibu,
    nama_ibu,
    tempat_lahir_ibu,
    tanggal_lahir_ibu,
    pendidikan_ibu,
    pekerjaan_ibu,
    penghasilan_ibu,
    no_hp_ibu,
    nik_wali,
    nama_wali,
    tempat_lahir_wali,
    tanggal_lahir_wali,
    pendidikan_wali,
    pekerjaan_wali,
    penghasilan_wali,
    no_hp_wali,
  } = await request.json();

  const status = "Pending"

  const data = {
    id_user,
    nik_ayah,
    nama_ayah,
    tempat_lahir_ayah,
    tanggal_lahir_ayah,
    pendidikan_ayah,
    pekerjaan_ayah,
    penghasilan_ayah,
    no_hp_ayah,
    nik_ibu,
    nama_ibu,
    tempat_lahir_ibu,
    tanggal_lahir_ibu,
    pendidikan_ibu,
    pekerjaan_ibu,
    penghasilan_ibu,
    no_hp_ibu,
    nik_wali,
    nama_wali,
    tempat_lahir_wali,
    tanggal_lahir_wali,
    pendidikan_wali,
    pekerjaan_wali,
    penghasilan_wali,
    no_hp_wali,
    status
  };

  const createData = await prisma.data_orangtua.create({ data })
  if (!createData) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
