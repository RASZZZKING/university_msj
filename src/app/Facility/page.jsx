import Navbar from "@/components/Navbar";
import authUserSession from "@/models/libs/auth-libs";
import prisma from "@/models/libs/prisma";
import { fasilitas } from "@/models/data/fasilitas";
import Compage from "./Compage";


const Page = async () => {
  const user = await authUserSession();
  const data = await prisma.account.findFirst({
    where: { email: user?.email },
  });


  return (
    <>
      <Navbar user={user} hasReg={data} />
      <Compage data={fasilitas.data} />
    </>
  );
};

export default Page;
