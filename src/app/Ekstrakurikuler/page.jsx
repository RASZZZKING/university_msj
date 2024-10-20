import Navbar from "@/components/Navbar";
import authUserSession from "@/models/libs/auth-libs";
import prisma from "@/models/libs/prisma";
import { eskul } from "@/models/data/eskul";
import Compage from "../Facility/Compage";

const Page = async () => {
  const user = await authUserSession();
  const data = await prisma.account.findFirst({
    where: { email: user?.email },
  });


  return (
    <>
      <Navbar user={user} hasReg={data} />
      <Compage data={eskul.data} />
    </>
  );
};

export default Page;
