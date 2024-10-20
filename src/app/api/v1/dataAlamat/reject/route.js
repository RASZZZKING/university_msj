import prisma from "@/models/libs/prisma"

export async function POST(request){
    const {
        id_user,
        status
    } = await request.json()
    const data = {
        status
    }

    const rejectData = await prisma.data_alamat_siswa.update({
        where: {id_user: id_user},
        data
    })
    if(!rejectData) return Response.json({ isReject: false, status: 500 })
   else return Response.json({ isReject:true, status:200 })
}