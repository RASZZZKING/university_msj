import ContentPaymentMobile from "@/components/Content/ContentPaymentMobile";
import ContentPaymentPC from "@/components/Content/ContentPaymentPC";
import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import React from "react";
import authUserSession from "@/models/libs/auth-libs";
import prisma from "@/models/libs/prisma";
import DataPayment from "@/components/Payment/DataPayment";

const Page = async () => {
  const user = await authUserSession();
  const data = await prisma.account.findFirst({
    where: { email: user?.user?.email },
  });
  const dataBiaya = await prisma.data_biaya.findMany();
  const dbPembayaran = await prisma.data_pembayaran.findMany({
    where: { id_user: data.id },
  });
  console.log("🚀 ~ Page ~ dbPembayaran:", dbPembayaran)

  const statusDataBiaya = {};
  for (let i = 0; i < dataBiaya.length; i++) {
    const element = dataBiaya[i].nama_biaya;
    const biaya = dataBiaya[i].jumlah_biaya;

    const amountPay2 = await prisma.data_pembayaran.findMany({
      where: {
        id_user: data.id,
        nama_pembayaran: element,
      },
    });

    const totalan = amountPay2
      .map((cb) => cb.jumlah_pembayaran)
      .reduce((acc, expense) => acc + Number(expense), 0);
    const minus = totalan - Number(biaya);
    const stats =
      totalan >= biaya
        ? "Lunas"
        : totalan < biaya && totalan !== 0
        ? "Cicil"
        : "Belum Dibayar";
    statusDataBiaya[element] = {
      status: stats,
      minus: minus,
    };
  }
  return (
    <>
      <div className="max-lg:hidden">
      <NavbarSamping user={user?.user?.email} />
      </div>
      <div className="lg:hidden flex justify-center py-6 sm:pt-10 bg-color-primary min-h-screen text-color-dark">
        <div className=" flex flex-col items-center pb-20 w-full px-6 ">
          <DataPayment
            dataPembayaran={{ data: dbPembayaran }}
            dataUser={data}
            dataBiaya={dataBiaya}
          />
        </div>
      </div>
      <ContentPaymentPC
        dataBiaya={dataBiaya}
        dataUser={data}
        dataPembayarann={{ data: dbPembayaran }}
        statusDataBiaya={statusDataBiaya}
      />
      <NavbarMobile />
    </>
  );
};

export default Page;
