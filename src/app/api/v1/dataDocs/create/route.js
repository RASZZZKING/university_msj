import prisma from "@/models/libs/prisma";
import path from 'path';
import fs from "fs/promises";

export async function POST(request) {
  try {
    const formData = await request.formData(); // Mengambil formData dengan benar

    // Ambil file dan data yang lain dari formData
    const id_user = formData.get('id_user');
    const kartu_keluarga = formData.get('kartu_keluarga');
    const akte_kelahiran = formData.get('akte_kelahiran');
    const ktp_orang_tua = formData.get('ktp_orang_tua');
    const skl = formData.get('skl');
    const ijazah = formData.get('ijazah');
    const shun_skhun = formData.get('shun_skhun');
    const rapor = formData.get('rapor');
    const kartu_nisn = formData.get('kartu_nisn');

    const files = { kartu_keluarga, akte_kelahiran, ktp_orang_tua, skl, ijazah, shun_skhun, rapor, kartu_nisn };

    // Variabel untuk menyimpan file names
    const savedFileNames = {};

    // Validasi dan penyimpanan file
    for (const key in files) {
      const file = files[key];
      if (file) {
        // Validasi tipe file
        if (!["image/jpg", "image/jpeg", "image/png"].includes(file.type)) {
          return new Response(JSON.stringify({ status: 400, message: "Invalid file type" }), { status: 400 });
        }
        // Validasi ukuran file
        if (file.size > 1_000_000) {
          return new Response(JSON.stringify({ status: 400, message: "Max size 1MB" }), { status: 400 });
        }

        // Membuat nama file baru yang unik
        const fileName = `${Date.now()}_${file.name}`;
        const filePath = path.join(process.cwd(), "public/document", fileName); // Simpan file di folder non-public
        
        const fileBuffer = await file.arrayBuffer();
        await fs.writeFile(filePath, Buffer.from(fileBuffer)); // Menyimpan file ke sistem

        // Simpan nama file yang sudah di-upload
        savedFileNames[key] = fileName;
      }
    }

    // Simpan data ke database dengan nama file yang sesuai
    const uploadFile = await prisma.data_dokumen.create({
      data: {
        id_user: Number(id_user),
        kartu_keluarga: savedFileNames.kartu_keluarga || null,
        akte_kelahiran: savedFileNames.akte_kelahiran || null,
        ktp_orang_tua: savedFileNames.ktp_orang_tua || null,
        skl: savedFileNames.skl || null,
        ijazah: savedFileNames.ijazah || null,
        shun_skhun: savedFileNames.shun_skhun || null,
        rapor: savedFileNames.rapor || null,
        kartu_nisn: savedFileNames.kartu_nisn || null,
        status: "Pending",
      },
    });

    return new Response(
      JSON.stringify({ status: 200, isUpload: true, data: uploadFile }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error saat upload dokumen:', error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
