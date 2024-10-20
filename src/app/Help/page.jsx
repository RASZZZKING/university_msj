import HelpComp from '@/components/HelpComp'
import Navbar from '@/components/Navbar'
import authUserSession from '@/models/libs/auth-libs'

const Page = async() => {
  const user = await authUserSession()
  const data = await prisma.account.findFirst({
    where: { email: user?.email }
  })
  const paraPendaftar = await prisma.account.findMany()
  return (
    <>
        <Navbar user={user}  hasReg={data} />
        <HelpComp pendaftar={paraPendaftar.length} />
    </>
  )
}

export default Page