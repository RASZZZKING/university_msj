import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import prisma from "@/models/libs/prisma";
import React from "react";
import TableSt from "./TableSt";
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
    if(datay !== null){
      newData.push({
        data_locs: datay,
      });
    }
  }

  const datE = await prisma.$queryRaw`DESCRIBE data_calon_siswa`
  const forMap = datE.map(cb => cb.Field)
  const field = datE.map(cb => cb.Field)
  for (let i = 0; i < field.length; i++) {
    field[i] = field[i].replace(/_/g, " ")
  }
  
  return (
    <>
      <div className="max-lg:hidden">
      <NavbarSamping user={siUser?.user?.email} />
      </div>
      <TableSt datax={newData} field={field} forMap={forMap} />
      <NavbarMobile datax={newData} />
    </>
  );
};

export default Page;
