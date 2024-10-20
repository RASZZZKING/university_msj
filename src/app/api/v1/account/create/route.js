import prisma from "@/models/libs/prisma";

export async function POST(request){
    const { nama, email, nomor, jenjang ,jalur } = await request.json()
    const data = { nama, email, nomor, jenjang ,jalur }

    const createAccount = await prisma.account.create({data})

    if(!createAccount) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}