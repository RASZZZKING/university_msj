import ContentListSiswa from "@/components/Content/ContentListSiswa";
import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import prisma from "@/models/libs/prisma";
import React from "react";

const Page = async () => {
  const datax = await prisma.account.findMany();
  const dataBiaya = await prisma.data_biaya.findMany()
  const dtb = dataBiaya
  .map((cb)=> cb.jumlah_biaya)
  .reduce((arr,expense)=> arr + Number(expense),0)

  const newData = [];
  for (let i = 0; i < datax.length; i++) {
    const id = datax[i].id;
    const datay = await prisma.data_calon_siswa.findFirst({
      where: { id_user: Number(id) },
    });
    const dataz = await prisma.data_alamat_siswa.findFirst({
      where: { id_user: Number(id) },
    });
    const datac = await prisma.data_orangtua.findFirst({
      where: { id_user: Number(id) },
    });
    const datav = await prisma.data_dokumen.findFirst({
      where: { id_user: Number(id) },
    });
    const datab = await prisma.data_pembayaran.findMany({
      where: { id_user: id,
        status: "Diterima"
       },
    });

    const formStatus = Boolean(datac && datav && datay && dataz)

    const totalBiaya = datab
    .map((cb)=> cb.jumlah_pembayaran)
    .reduce((arr,expense)=> arr + Number(expense), 0)
    

    const status = formStatus ? totalBiaya > 25% dtb
      ? "Pedaftaran Berhasil"
      : "Belum Bayar Uang Muka"
    : "Belum isi Formulir"
    
    newData.push({
      id: id,
      nama: datax[i].nama,
      status: status,
      asal_sekolah: datay.asal_sekolah
    });
  }

  return (
    <>
      <div className="max-lg:hidden">
        <NavbarSamping user={"farras.akhirio.ramadhan.204@gmail.com"} />
      </div>
      <ContentListSiswa datax={newData} />
      <NavbarMobile datax={newData} />
    </>
  );
};

export default Page;
