import prisma from "@/models/libs/prisma";

export async function POST(request) {
  const { id, id_user, status } = await request.json();

  const data = {
    id_user,
    status,
  };

  const rejectData = await prisma.data_pembayaran.update({
    where: {
      id: id,
    },
    data,
  });


  if(!rejectData) return Response.json({status: 500, isReject: false})
    else return Response.json({status: 200, isReject: true})
}
