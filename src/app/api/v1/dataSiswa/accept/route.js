import prisma from "@/models/libs/prisma"

export async function POST(request){
    const {
        id_user,
        status
    } = await request.json()
    const data = {
        status
    }

    const accData = await prisma.data_calon_siswa.update({
        where: {id_user: id_user},
        data
    })

    if(!accData) return Response.json({  status: 400, isAcc: "Data gagal di Acc"    })
    else return Response.json({  status: 200, isAcc: "Data berhasil di Acc"    })
}