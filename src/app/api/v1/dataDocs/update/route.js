import prisma from "@/models/libs/prisma";
import path from "path";
import fs from "fs/promises";

export async function POST(request) {
  try {
    const formData = await request.formData(); // Mengambil data form dari request
    console.log("Form data received");

    const id = formData.get("id"); // ID Dokumen
    const id_user = formData.get("id_user"); // Pastikan id_user adalah string
    const kartu_keluarga = formData.get("kartu_keluarga");
    const akte_kelahiran = formData.get("akte_kelahiran");
    const ktp_orang_tua = formData.get("ktp_orang_tua");
    const skl = formData.get("skl");
    const ijazah = formData.get("ijazah");
    const shun_skhun = formData.get("shun_skhun");
    const rapor = formData.get("rapor");
    const kartu_nisn = formData.get("kartu_nisn");

    const files = {
      kartu_keluarga,
      akte_kelahiran,
      ktp_orang_tua,
      skl,
      ijazah,
      shun_skhun,
      rapor,
      kartu_nisn,
    };
    console.log("Files:", files);

    // Cek apakah ada dokumen dengan ID ini
    const existingDocument = await prisma.data_dokumen.findUnique({
      where: {
        id: Number(id), // Asumsikan id adalah integer
      },
    });

    if (!existingDocument) {
      console.log("Dokumen tidak ditemukan untuk ID:", id);
      return new Response(
        JSON.stringify({ error: "Dokumen tidak ditemukan" }),
        {
          status: 404,
        }
      );
    }

    // Variabel untuk menyimpan nama file baru
    const savedFileNames = {};

    // Pastikan folder 'document' ada
    const documentDir = path.join(process.cwd(), "public/document");
    await fs.mkdir(documentDir, { recursive: true });
    console.log(`Folder 'document' sudah ada atau berhasil dibuat.`);

    // Proses setiap file
    for (const key in files) {
      const file = formData.get(key);
      console.log(`Memproses file ${key}:`, file);

      if (file && file.size > 0 && key !== "id_user" && key !== "id") {
        // Validasi tipe file
        if (!["image/jpg", "image/jpeg", "image/png"].includes(file.type)) {
          console.log(`Tipe file ${key} tidak valid: ${file.type}`);
          return new Response(
            JSON.stringify({ error: `Tipe file ${key} tidak valid` }),
            { status: 400 }
          );
        }

        // Validasi ukuran file
        if (file.size > 1_000_000) {
          // Maksimal 1MB
          console.log(`Ukuran file ${key} terlalu besar: ${file.size}`);
          return new Response(
            JSON.stringify({ error: `Ukuran file ${key} terlalu besar` }),
            { status: 400 }
          );
        }

        // Simpan file baru
        const fileName = `${Date.now()}_${file.name}`;
        const filePath = path.join(documentDir, fileName);
        console.log(`Menyimpan file ${key} sebagai ${fileName} di ${filePath}`);

        const fileBuffer = await file.arrayBuffer();
        await fs.writeFile(filePath, Buffer.from(fileBuffer));

        // Simpan nama file baru
        savedFileNames[key] = fileName;
        console.log(`File ${key} disimpan sebagai ${fileName}`);

        // Hapus file lama jika ada
        if (existingDocument[key]) {
          const oldFilePath = path.join(documentDir, existingDocument[key]);
          try {
            await fs.unlink(oldFilePath); // Hapus file lama
            console.log(`File lama ${existingDocument[key]} berhasil dihapus.`);
          } catch (unlinkError) {
            console.error(
              `Gagal menghapus file lama ${existingDocument[key]}:`,
              unlinkError
            );
          }
        }
      } else {
        // Jika file tidak dikirim, gunakan file lama
        savedFileNames[key] = existingDocument[key];
        console.log(
          `Tidak ada file baru untuk ${key}, menggunakan file lama: ${existingDocument[key]}`
        );
      }
    }

    // Update data dokumen di database menggunakan nama file yang baru
    const updatedDocument = await prisma.data_dokumen.update({
      where: { id_user: Number(id_user) }, // Asumsikan id adalah integer
      data: {
        kartu_keluarga:
          savedFileNames.kartu_keluarga || existingDocument.kartu_keluarga,
        akte_kelahiran:
          savedFileNames.akte_kelahiran || existingDocument.akte_kelahiran,
        ktp_orang_tua:
          savedFileNames.ktp_orang_tua || existingDocument.ktp_orang_tua,
        skl: savedFileNames.skl || existingDocument.skl,
        ijazah: savedFileNames.ijazah || existingDocument.ijazah,
        shun_skhun: savedFileNames.shun_skhun || existingDocument.shun_skhun,
        rapor: savedFileNames.rapor || existingDocument.rapor,
        kartu_nisn: savedFileNames.kartu_nisn || existingDocument.kartu_nisn,
        status: "Pending",
      },
    });

    console.log("Dokumen berhasil diupdate:", updatedDocument);

    // Kirim response sukses
    return new Response(
      JSON.stringify({ status: 200, isUpdated: true, data: updatedDocument }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Terjadi kesalahan", details: err.message }),
      {
        status: 500,
      }
    );
  }
}
