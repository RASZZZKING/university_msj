import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import prisma from "@/models/libs/prisma";
import React from "react";
import TabelPayment from "./TabelPayment";
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
      const nama = datax[i].nama;
      const id = datax[i].id;
      const datay = await prisma.data_pembayaran.findMany({
        where: {  id_user:  id  , status: "Pending" },
      });
      console.log("🚀 ~ Page ~ datay:", datay)
    
      newData.push({
        nama:   nama,
        id: id,
        data_locs: datay
      });
  }
  for (let i = 0; i < datax.length; i++) {
      const nama = datax[i].nama;
      const id = datax[i].id;
      const datay = await prisma.data_pembayaran.findMany({
        where: {
          NOT: {
            status: "Pending",
          },
        },
      });
      if(datay !== null){
        newData.push({
          nama:   nama,
          id: id,
          data_locs: datay
        });
      }
  }




  const datE = await prisma.$queryRaw`DESCRIBE data_pembayaran`;
  const forMap = datE.map((cb) => cb.Field);
  console.log("🚀 ~ Page ~ forMap:", forMap)
  const field = datE.map((cb) => cb.Field);
  for (let i = 0; i < field.length; i++) {
    field[i] = field[i].replace(/_/g, " ");
  }

  console.log("🚀 ~ Page ~ newData:", newData);

  return (
    <>
      <div className="max-lg:hidden">
      <NavbarSamping user={siUser?.user?.email} />
      </div>
      <TabelPayment datax={newData} field={field} forMap={forMap} />
      <NavbarMobile datax={newData} />
    </>
  );
};

export default Page;
