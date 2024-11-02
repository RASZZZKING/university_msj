import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import prisma from "@/models/libs/prisma";
import React from "react";
import TabelOT from "./TableOT";
import authUserSession from "@/models/libs/auth-libs";
import { redirect } from "next/navigation";

const Page = async () => {
    const siUser = await authUserSession()
    if(siUser?.user?.email !== process.env.NEXT_PUBLIC_ADMIN){
      return redirect("/")
    }

  const datax = await prisma.account.findMany();

  const newData = [];
  for (let i = 0; i < datax.length; i++) {
    const id = datax[i].id;
    const datay = await prisma.data_calon_siswa.findFirst({
      where: { id_user: Number(id) },
    });
    const datav = await prisma.data_orangtua.findFirst({
      where: { id_user: Number(id) },
    });

    if(datav !== null){
      newData.push({
        id: id,
        nama: datax[i].nama,
        asal_sekolah: !datay ? "-" : datay.asal_sekolah,
        data_locs: datav,
      });
    }
    
  }

  const filedTable = await prisma.$queryRaw`DESCRIBE data_orangtua`
  
  const filters = filedTable.map((cb)=> cb.Field )
  console.log("🚀 ~ Page ~ filters:", filters)
  return (
    <>
      <div className="max-lg:hidden">
      <NavbarSamping user={siUser?.user?.email} />
      </div>
      <TabelOT datax={newData} />
      <NavbarMobile datax={newData} />
    </>
  );
};

export default Page;
