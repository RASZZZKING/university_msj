import ConstentDashFull from "@/components/Content/ConstentDashFull";
import ContentDashMobile from "@/components/Content/ContentDashMobile";
import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import NavbarWelcome from "@/components/utils/NavbarWelcome";
import authUserSession from "@/models/libs/auth-libs";
import prisma from "@/models/libs/prisma";

const Page = async () => {
  const user = await authUserSession();
  const data = await prisma.account.findFirst({
    where: { email: user?.email },
  });
  
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
      <NavbarSamping />
      <ConstentDashFull data={data} isFill={dSiswa} dFull={dFull} />
      <div className="hidden">
        <ContentDashMobile />
      </div>
      <NavbarMobile />
    </>
  );
};

export default Page;
