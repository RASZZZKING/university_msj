import ContentDash from "@/components/Content/ContentDash";
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
    redirect("/");
  } else {
    if (!data) {
      redirect("/Register");
    }
  }
  return (
    <div className="min-h-svh max-h-svh bg-color-primary">
      {/* <Navbar2 historyInput={historyInput} /> */}
      <NavbarWelcome />
      <ContentDash dataUser={data} isFill={updateData} />
    </div>
  );
};

export default Page;
