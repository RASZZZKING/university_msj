import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import prisma from "@/models/libs/prisma";
import React from "react";
import authUserSession from "@/models/libs/auth-libs";
import { redirect } from "next/navigation";
import TabelUser from "./TabelUser";

const Page = async () => {
    const siUser = await authUserSession()
    if(siUser?.user?.email !== process.env.NEXT_PUBLIC_ADMIN){
      return redirect("/")
    }


  const newData = [];

  const datay = await prisma.account.findMany({
    where: { status: "Pending" },
  });
  for (let i = 0; i < datay.length; i++) {
    newData.push(datay[i])
  }
  const datam = await prisma.account.findMany({
        where: {
          NOT: {
            status: "Pending",
          },
        },
      });
  for (let i = 0; i < datam.length; i++) {
    newData.push(datam[i])
  }
  



  const datE = await prisma.$queryRaw`DESCRIBE account`;
  const forMap = datE.map((cb) => cb.Field);
  console.log("🚀 ~ Page ~ forMap:", forMap)
  const field = datE.map((cb) => cb.Field);
  for (let i = 0; i < field.length; i++) {
    field[i] = field[i].replace(/_/g, " ");
  }

  console.log("🚀 ~ Page ~ newData:", newData)


  return (
    <>
      <div className="max-lg:hidden">
      <NavbarSamping user={siUser?.user?.email} />
      </div>
      <TabelUser datax={newData} field={field} forMap={forMap} />
      <NavbarMobile datax={newData} />
    </>
  );
};

export default Page;
