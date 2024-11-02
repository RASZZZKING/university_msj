import prisma from "@/models/libs/prisma"

export async function POST(request){
    const {
        id
    } = await request.json()

    const response = await prisma.account.update({
        where: {id},
        data: {
            status: "Diterima"
        }
    })

    if(!response) return Response.json({status: 500, isAcc: false})
    else return Response.json({status: 200, isAcc: true})
}