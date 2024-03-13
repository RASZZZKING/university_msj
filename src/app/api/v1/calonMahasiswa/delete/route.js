import prisma from "@/models/libs/prisma";

export async function POST(request){
    const { id } = await request.json()
    
    const deleteData = await prisma.calonMahasiswa.delete({
        where: { id: id }
    })
    if(!deleteData) return Response.json({
        status: 500,
        isDelete: false
    })
    else return Response.json({
        status: 200,
        isDelete: true
    })
}