import ContentPaymentMobile from "@/components/Content/ContentPaymentMobile";
import ContentPaymentPC from "@/components/Content/ContentPaymentPC";
import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import authUserSession from "@/models/libs/auth-libs";
import prisma from "@/models/libs/prisma";
import React from "react";

const Page = async() => {
  const user = await authUserSession();
  const data = await prisma.account.findFirst({
    where: { email: user?.user?.email },
  });
  const dataBiaya = await prisma.data_biaya.findMany();
  const dbPembayaran = await prisma.data_pembayaran.findMany({
    where: { id_user: data.id },
  });

  const statusDataBiaya = {};
  for (let i = 0; i < dataBiaya.length; i++) {
    const element = dataBiaya[i].nama_biaya;
    const biaya = dataBiaya[i].jumlah_biaya;

    // Ambil data pembayaran berdasarkan nama_pembayaran dan id_user
    const amountPay2 = await prisma.data_pembayaran.findMany({
      where: {
        id_user: data.id,
        nama_pembayaran: element,
      },
    });

    // Ambil hanya nilai 'jumlah_pembayaran' dari setiap item
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
      {/* <ContentPayment /> */}
      <ContentPaymentMobile />
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
