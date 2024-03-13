import prisma from "@/models/libs/prisma";

export async function POST(request){
    const {
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
        NIK
      } = await request.json()
    const data = {
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
        NIK
      }

    
    const createFullData = await prisma.calonMahasiswa.create({data})
    
    if(!createFullData) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })

}