'use client'

import Image from "next/image"
import Link from "next/link"

type PostProps = {
  id: string
  avatar: string
  name: string
  title: string
  comments?: {
    id: string
    postId: string
    userId: string
  }[]
}

export default function Post({ avatar, name, title, id, comments } : PostProps) {
  return (
    <div className="bg-white my-8 p-8 rounded-lg">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={avatar}
          alt="avatar"
        />
        <h3 className="font-bold text-gray-700">{name}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{title}</p>
      </div>
      <div className="flex gap-4 cursor-pointer items-center">
        <Link href={`/post/${id}`}>
          <p className="text-small font-bold text-gray-700">
            {comments?.length} Comments
          </p>
        </Link>
      </div>
    </div>
  )
}

//https://youtu.be/4xduSsxa5Os?t=8000