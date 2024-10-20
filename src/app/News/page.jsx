import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import News, { HeaderNews } from "@/components/NewsPage";
import authUserSession from "@/models/libs/auth-libs";
import React from "react";

const Page = async() => {

  const user = await authUserSession()
  const data = await prisma.account.findFirst({
    where: { email: user?.email }
  })

  return (
    <>
        <Navbar user={user}  hasReg={data} />

      <div className="h-16"></div>
      <div className="flex justify-center">
        <HeaderNews />
      </div>
      <div className="mt-6 pb-10">
        <News />
        <News />
      </div>
      <Footer />
    </>
  );
};

export default Page;
