import prisma from "@/models/libs/prisma";

export async function POST(request) {
  const { id_user, status } = await request.json();
  const data = {
    status,
  };
  const accData = await prisma.data_alamat_siswa.update({
    where: { id_user: id_user },
    data,
  });

  if (!accData) return Response.json({ isAcc: false, status: 500 });

  else return Response.json({ isAcc: true, status: 200 });
}