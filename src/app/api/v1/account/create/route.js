import prisma from "@/models/libs/prisma";

export async function POST(request){
    const { nama, email, nomor, jalur, password } = await request.json()
    const data = { nama, email, nomor, jalur, password }

    const createAccount = await prisma.account.create({data})

    if(!createAccount) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}