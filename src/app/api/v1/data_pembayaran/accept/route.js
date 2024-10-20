import prisma from "@/models/libs/prisma";

export async function POST(request) {
  const { id, id_user, status } = await request.json();

  const data = {
    id_user,
    status,
  };

  const accData = await prisma.data_pembayaran.update({
    where: {
      id: id,
    },
    data,
  });


  if(!accData) return Response.json({status: 500, isAcc: false})
    else return Response.json({status: 200, isAcc: true})
}
