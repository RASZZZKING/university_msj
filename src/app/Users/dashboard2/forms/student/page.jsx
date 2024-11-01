import ConstentDashFull from "@/components/Content/ConstentDashFull";
import ContentDashMobile from "@/components/Content/ContentDashMobile";
import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import authUserSession from "@/models/libs/auth-libs";
import prisma from "@/models/libs/prisma";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await authUserSession();
  console.log("🚀 ~ Page ~ user:", user)
  const data = await prisma.account.findFirst({
    where: { email: user?.user?.email },
  });
  console.log("🚀 ~ Page ~ data:", data)


  if(!data) return redirect("/Register")
  const dOrtu = await prisma.data_orangtua.findFirst({
    where: {id_user: data?.id}
  })

  const dSiswa = await prisma.data_calon_siswa.findFirst({
    where: {id_user: data?.id}
  })
  const dDocs = await prisma.data_dokumen.findFirst({
    where: {id_user: data?.id}
  })
  const dMaps = await prisma.data_alamat_siswa.findFirst({
    where: {id_user: data?.id}
  })

  const dFull = {
    dOrtu,
    dMaps,
    dSiswa,
    dDocs,
  }
  return (
    <>
      <NavbarSamping user={user?.user?.email} />
      <ConstentDashFull data={data} isFill={dSiswa} dFull={dFull} />
      <div className="hidden">
        <ContentDashMobile />
      </div>
      <NavbarMobile />
    </>
  );
};

export default Page;
