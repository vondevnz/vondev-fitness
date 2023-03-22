import Link from "next/link";
import Login from "./Login";
import Logged from './Logged'
import Image from "next/image";
import logo from '../../assets/testlogo5_clear.png'
import { getServerSession } from 'next-auth/next'
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Nav() {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"} className="flex items-center">
        <Image 
            width={64} 
            height={64} 
            src={logo}
            alt="" 
            priority 
            className='w-10 rounded-full'
          />
        <h1 className=" font-bold text-lg">vondev.</h1>
      </Link>
      <Link href={"/posts"}>
        <h1 className=" font-extralight text-lg">POSTS</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <Logged imageProfile={session.user?.image || ""} />}
      </ul>
  </nav>
  )
}