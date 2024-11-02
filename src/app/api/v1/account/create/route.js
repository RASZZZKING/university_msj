import prisma from "@/models/libs/prisma";
import path from 'path';
import fs from "fs/promises";


export async function POST(request) {
  const fmxData = await request.formData();
  const jenjang = fmxData.get("jenjang");
  const nama = fmxData.get("nama");
  const email = fmxData.get("email");
  const nomor = fmxData.get("nomor");
  const jalur = fmxData.get("jalur");
  const bukti_bayar_formz = fmxData.get("bukti_bayar_form");
  const status = "Pending"
  let bukti_bayar_form = null;

  if (bukti_bayar_formz) {
    // Validasi tipe bukti_bayar_formz
    if (
      !["image/jpg", "image/jpeg", "image/png"].includes(bukti_bayar_formz.type)
    ) {
      return new Response(
        JSON.stringify({ status: 400, message: "Invalid file type" }),
        { status: 400 }
      );
    }
    // Validasi ukuran file
    if (bukti_bayar_formz.size > 1_000_000) {
      return new Response(
        JSON.stringify({ status: 400, message: "Max size 1MB" }),
        { status: 400 }
      );
    }

    // Membuat nama file baru yang unik
    const fileName = `${Date.now()}_${bukti_bayar_formz.name}`;
    const filePath = path.join(process.cwd(), "public/bayar_form", fileName); // Simpan file di folder non-public

    const fileBuffer = await bukti_bayar_formz.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(fileBuffer)); // Menyimpan file ke sistem

    // Simpan nama file yang sudah di-upload
    bukti_bayar_form = fileName;
  }

  // const { nama, email, nomor, jenjang ,jalur } = await request.json()
  const data = { nama, email, nomor, jenjang, jalur, bukti_bayar_form, status };

  const createAccount = await prisma.account.create({ data });

  if (!createAccount) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
