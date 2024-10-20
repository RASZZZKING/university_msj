import prisma from "@/models/libs/prisma";
import path from "path";
import fs from "fs/promises";

export async function POST(request) {
  // const {
  //   id_user,
  //   no_pendaftaran,
  //   nisn,
  //   nik,
  //   no_kk,
  //   nama_lengkap,
  //   tempat,
  //   email,
  //   tanggal_lahir,
  //   no_hp,
  //   asal_sekolah,
  //   urutan_anak,
  //   jumlah_saudara,
  //   tinggi_badan,
  //   berat_badan,
  //   status_dalam_keluarga,
  //   kip,
  //   ukuran_baju,
  // } = await request.json();
  // const data = {
  //   id_user,
  //   no_pendaftaran,
  //   nisn,
  //   nik,
  //   no_kk,
  //   nama_lengkap,
  //   tempat,
  //   email,
  //   tanggal_lahir,
  //   no_hp,
  //   asal_sekolah,
  //   urutan_anak,
  //   jumlah_saudara,
  //   tinggi_badan,
  //   berat_badan,
  //   status_dalam_keluarga,
  //   kip,
  //   ukuran_baju,
  // };

  const formData = await request.formData();

  const id = formData.get("id");
  const id_user = formData.get("id_user");
  const no_pendaftaran = formData.get("no_pendaftaran");
  const foto = formData.get("foto");
  const nisn = formData.get("nisn");
  const nik = formData.get("nik");
  const no_kk = formData.get("no_kk");
  const nama_lengkap = formData.get("nama_lengkap");
  const tempat = formData.get("tempat");
  const email = formData.get("email");
  const tanggal_lahir = formData.get("tanggal_lahir");
  const no_hp = formData.get("no_hp");
  const asal_sekolah = formData.get("asal_sekolah");
  const urutan_anak = formData.get("urutan_anak");
  const jumlah_saudara = formData.get("jumlah_saudara");
  const tinggi_badan = formData.get("tinggi_badan");
  const berat_badan = formData.get("berat_badan");
  const status_dalam_keluarga = formData.get("status_dalam_keluarga");
  const kip = formData.get("kip");
  const ukuran_baju = formData.get("ukuran_baju");

  const dataLama = await prisma.data_calon_siswa.findUnique({
    where: { id_user: Number(id_user) },
  });

  let savedFiles = {};
  if (foto) {
    if (!["image/jpg", "image/jpeg", "image/png"].includes(foto.type) && typeof foto !== "string") {
      return new Response(
        JSON.stringify({ status: 400, message: "Invalid file type" }),
        { status: 400 }
      );
    }
    // Validasi ukuran file
    if (foto.size > 1_000_000 && foto !== "string") {
      return new Response(
        JSON.stringify({ status: 400, message: "Max size 1MB" }),
        { status: 400 }
      );
    }

    // Membuat nama file baru yang unik
    const fileName = `${Date.now()}_${nama_lengkap}_${foto.name}`;
    const filePath = path.join(process.cwd(), "public/foto_siswa", fileName); // Simpan file di folder non-public

    const fileBuffer = await foto.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(fileBuffer)); // Menyimpan file ke sistem

    // Hapus file lama jika ada
    if (dataLama.foto) {
      const oldFilePath = path.join(
        process.cwd(),
        "public/foto_siswa",
        dataLama.foto
      );
      try {
        await fs.unlink(oldFilePath); // Hapus file lama
        console.log(`File lama ${dataLama.foto} berhasil dihapus.`);
      } catch (unlinkError) {
        console.error(
          `Gagal menghapus file lama ${dataLama.foto}:`,
          unlinkError
        );
      }
    }

    savedFiles.foto = fileName;
  }

  const updateFullData = await prisma.data_calon_siswa.update({
    where: {id_user: Number(id_user)},
    data: {
      no_pendaftaran: no_pendaftaran,
      foto: savedFiles.foto,
      nisn: nisn,
      nik: nik,
      no_kk: no_kk,
      nama_lengkap: nama_lengkap,
      tempat: tempat,
      email: email,
      tanggal_lahir: tanggal_lahir,
      no_hp: no_hp,
      asal_sekolah: asal_sekolah,
      urutan_anak: urutan_anak,
      jumlah_saudara: jumlah_saudara,
      tinggi_badan: tinggi_badan,
      berat_badan: berat_badan,
      status_dalam_keluarga: status_dalam_keluarga,
      kip: kip,
      ukuran_baju: ukuran_baju,
      status: "Pending",
    },
  });

  if (!updateFullData) return Response.json({ status: 500, isUpdate: false });
  else return Response.json({ status: 200, isUpdate: true });
}
