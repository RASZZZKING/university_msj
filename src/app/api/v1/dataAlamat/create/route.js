import prisma from "@/models/libs/prisma";

export async function POST(request) {
  const {
    id_user,
    alamat,
    rt,
    rw,
    desa,
    kecamatan,
    kota,
    provinsi,
    kode_pos,
    tinggal_bersama,
    jarak_kesekolah,
    waktu_kesekolah,
    transportasi,
  } = await request.json();

  const data = {
    id_user,
    alamat,
    rt,
    rw,
    desa,
    kecamatan,
    kota,
    provinsi,
    kode_pos,
    tinggal_bersama,
    jarak_kesekolah,
    waktu_kesekolah,
    transportasi,
    status: "Pending"
  };

  const createData = await prisma.data_alamat_siswa.create({ data });
  if (!createData) return Response.json({ isCreate: false, status: 500 });
  else return Response.json({ isCreated: true, status: 200 });
}
