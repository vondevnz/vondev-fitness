import HomeLogged from "./components/HomeLogged"
import HomeLogin from "./components/HomeLogin"
import { getServerSession } from 'next-auth/next'
import { authOptions } from "../pages/api/auth/[...nextauth]"

export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <main>
      {!session && <HomeLogin />}
      {session && <HomeLogged />}
    </main>
  )
}