import prisma from "@/models/libs/prisma";

export async function POST(request) {
  const { id_user,status } = await request.json();
const data = {
    status
}
  const rejectData = await prisma.data_dokumen.update({
    where: { id_user: id_user },
    data
  });

  if (!rejectData)
    return Response.json({ status: 400, isReject: "Data gagal di reject" });
  else
    return Response.json({ status: 200, isReject: "Data berhasil di reject" });
}
