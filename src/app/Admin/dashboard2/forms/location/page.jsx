import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import prisma from "@/models/libs/prisma";
import React from "react";
import TabelLocs from "./TabelLocs";
import authUserSession from "@/models/libs/auth-libs";

const Page = async () => {
    const siUser = await authUserSession()

  const datax = await prisma.account.findMany();

  const newData = [];
  for (let i = 0; i < datax.length; i++) {
    const id = datax[i].id;
    const datay = await prisma.data_calon_siswa.findFirst({
      where: { id_user: Number(id) },
    });
    const datav = await prisma.data_alamat_siswa.findFirst({
      where: { id_user: Number(id) },
    });
    console.log("🚀 ~ Page ~ datav:", datav)

    newData.push({
      id: id,
      nama: datax[i].nama,
      asal_sekolah: datay.asal_sekolah,
      data_locs: datav,
    });
  }

  return (
    <>
      <div className="max-lg:hidden">
        <NavbarSamping user={siUser.user.email} />
      </div>
      <TabelLocs datax={newData} />
      <NavbarMobile datax={newData} />
    </>
  );
};

export default Page;
