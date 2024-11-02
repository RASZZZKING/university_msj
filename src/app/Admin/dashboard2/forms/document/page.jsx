import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import prisma from "@/models/libs/prisma";
import React from "react";
import TabelDocs from "./TabelDocs";
import authUserSession from "@/models/libs/auth-libs";
import { redirect } from "next/navigation";

const Page = async () => {
  const siUser = await authUserSession()
  const datax = await prisma.account.findMany();

  if(siUser?.user?.email !== process.env.NEXT_PUBLIC_ADMIN){
    return redirect("/")
  }
    
  const newData = [];
  for (let i = 0; i < datax.length; i++) {
    const id = datax[i].id;
    const datay = await prisma.data_calon_siswa.findFirst({
      where: { id_user: Number(id) },
    });
    const datav = await prisma.data_dokumen.findFirst({
      where: { id_user: Number(id) },
    });

    if(datav !== null){
    const status = datav.status;
      newData.push({
        id: id,
        nama: datax[i].nama,
        status: status,
        asal_sekolah: !datay ? "-" : datay.asal_sekolah,
        data_docs: datav,
      });
    }
  }


  return (
    <>
      <div className="max-lg:hidden">
        <NavbarSamping user={siUser?.user?.email} />
      </div>
      <TabelDocs datax={newData} />
      <NavbarMobile datax={newData} />
    </>
  );
};

export default Page;
