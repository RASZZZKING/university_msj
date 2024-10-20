import prisma from "@/models/libs/prisma";

export async function POST(request){
    const {
        id,
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
    } = await request.json()

    const data = {
        id,
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
    }
    
    const goUpdate = await prisma.data_alamat_siswa.update({
        where: {id: data.id},
        data: data
    })

    if(!goUpdate) return Response.json({status:500,isUpdate:false})
        else return Response.json({status:200,isUpdate:true})
}