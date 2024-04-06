import ConstentDashFull from "@/components/Content/ConstentDashFull";
import ContentDash from "@/components/Content/ContentDash";
import ContentDash2 from "@/components/Content/ContentDash2";
import ContentDashFiles from "@/components/Content/ContentDashFiles";
import ContentDashMobile from "@/components/Content/ContentDashMobile";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import NavbarWelcome from "@/components/utils/NavbarWelcome";
import authUserSession from "@/models/libs/auth-libs";
import prisma from "@/models/libs/prisma";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await authUserSession();
  const data = await prisma.account.findFirst({
    where: { email: user?.email },
  });
  const updateData = await prisma.calonMahasiswa.findFirst({
    where: {email: user?.email}
  })
  


  if (!user) {
    // redirect("/");
  } else {
    if (!data) {
      redirect("/Register");
    }
  }
  return (
    <>
      {/* <Navbar2 historyInput={historyInput} /> */}
      {/* <NavbarWelcome  /> */}
      {/* <ContentDash2 dataUser={data} isFill={updateData} /> */}
      <NavbarSamping />
      {/* <ConstentDashFull /> */}
      <ContentDashFiles />
      <div className="hidden">
      <ContentDashMobile />
      </div>
        
      <NavbarMobile />
    </>
  );
};

export default Page;
