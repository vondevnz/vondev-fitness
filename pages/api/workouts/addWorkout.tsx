import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from 'next-auth/next'
import { authOptions } from "../auth/[...nextauth]"
import prisma from "../../../prisma/client"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.method === "POST") {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
      return res.status(401).json({ message: "Please sign in to make a workout"})
    }

    const title : string = req.body.workoutName

    //Get user
    const prismaUser = await prisma.user.findUnique({
      where: {email: session?.user?.email}
    })

    //Check title
    if (title.length > 300) {
      return res.status(403).json({ message: "Please write a shorter title"})
    }
    if (title.length === 0) {
      return res.status(403).json({ message: "Please do not leave this empty"})
    }

    //Create Workout
    try {
      const result = await prisma.workout.create({
        data: {
          title,
          userId: prismaUser.id
        }
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(403).json({ message: "Error has occured while making a post"})
    }
  }
}