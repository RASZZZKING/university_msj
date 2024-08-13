import NavbarWelcome from "@/components/utils/NavbarWelcome";
import ContentReg from "@/components/Content/ContentReg";
import authUserSession from "@/models/libs/auth-libs";
import prisma from "@/models/libs/prisma";
import { redirect } from "next/navigation";

const Page = async() => {
  // const user = await authUserSession()
  // const data = await prisma.account.findFirst({
  //   where: { email: user?.email }
  // })

  // if(user && data ){
  //   redirect("/Users/dashboard")
  // }

  // console.log(data);

  const user = {
    user: {
      email: "farras.akhirio.ramadhan.204@gmail.com",
      name: "Farras Akra",
      id: 123213124124
    }
  }
  

  return (
    <div className="min-h-svh max-h-svh bg-color-primary">
      <NavbarWelcome />
      <ContentReg user={user}  />
    </div>
  );
};

export default Page;



