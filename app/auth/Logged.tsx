'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

type User = {
  imageProfile: string
}

export default function Logged({ imageProfile }: User) {
  return (
    <li className='flex gap-8 items-center'>
      <button onClick={() => signOut()} className='text-sm bg-gray-700 text-white py-2 px-6 rounded-xl'>
        Sign Out
      </button>
      <Link href={"/dashboard"}>
        <Image 
          width={64} 
          height={64} 
          src={imageProfile} 
          alt="" 
          priority 
          className='w-10 rounded-full'
        />
      </Link>
    </li>
  )
}