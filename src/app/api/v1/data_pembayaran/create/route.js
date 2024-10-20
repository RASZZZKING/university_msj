import prisma from "@/models/libs/prisma";
import path from "path";
import fs from "fs/promises";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const id_user = formData.get("id_user");
    const nama_pembayaran = formData.get("nama_pembayaran");
    const jumlah_pembayaran = formData.get("jumlah_pembayaran");
    const bukti_pembayaran = formData.get("bukti_pembayaran");
    const status = formData.get("status");

    let savedFileNames;

    if (bukti_pembayaran) {
      // Validasi tipe bukti_pembayaran
      if (
        !["image/jpg", "image/jpeg", "image/png"].includes(
          bukti_pembayaran.type
        )
      ) {
        return new Response(
          JSON.stringify({ status: 400, message: "Invalid file type" }),
          { status: 400 }
        );
      }
      // Validasi ukuran file
      if (bukti_pembayaran.size > 1_000_000) {
        return new Response(
          JSON.stringify({ status: 400, message: "Max size 1MB" }),
          { status: 400 }
        );
      }

      // Membuat nama file baru yang unik
      const fileName = `${Date.now()}_${bukti_pembayaran.name}`;
      const filePath = path.join(process.cwd(), "public/bukti_pembayaran", fileName); // Simpan file di folder

      const fileBuffer = await bukti_pembayaran.arrayBuffer();
      await fs.writeFile(filePath, Buffer.from(fileBuffer)); // Menyimpan file ke sistem

      savedFileNames = fileName;
    }

    const uploadBukti = await prisma.data_pembayaran.create({
      data: {
        id_user: Number(id_user),
        nama_pembayaran: nama_pembayaran,
        jumlah_pembayaran: jumlah_pembayaran,
        bukti_pembayaran: savedFileNames,
        status: status,
      },
    });

    return new Response(
      JSON.stringify({ status: 200, isUpload: true, data: uploadBukti }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saat upload dokumen:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
