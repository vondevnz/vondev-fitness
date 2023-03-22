'use client'

import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'

export default function AddWorkout() {

  const [workoutName, setWorkoutName] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    redirect('/addExercises')
  }

  const { mutate } = useMutation(
    async (workoutName: string) => await axios.post('/api/workouts/addWorkout', { workoutName }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message)
        }
        setIsDisabled(false)
      },
      onSuccess: (data) => {
        toast.success('Workout has been made!')
        setWorkoutName(''),
        setIsDisabled(false)
        setSubmitted(true)
      },
    }
  )

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsDisabled(true)
    mutate(workoutName)
  }

  return (
    <div className="px-2">
      <form onSubmit={submitPost}>
        <label className="block">
          <div>
            <span className="block text-sm font-medium text-slate-700">Workout</span>
            <input 
              onChange={(e) => setWorkoutName(e.target.value)} 
              type="text" 
              placeholder="Name of your workout" 
              name="name"
              value={workoutName}
              className="mt-1 block 
              w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm 
              placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 
              focus:ring-sky-500"
            />
          </div>
          <div className="py-5 ">
            <button 
              className="text-sm bg-gray-700 text-white py-2 px-6 w-full rounded-xl disabled:opacity-25"
              disabled={isDisabled}
              type="submit"
            >
                Create Workout
            </button>
          </div> 
        </label>
      </form>
    </div>
  )
}

/**<div className="flex">
          <input type="text" placeholder="Execerise Name" className="mt-5 
          w-9/12 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm 
          placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 
          focus:ring-sky-500
          " name="name" />
          <span className="mt-5 ml-4 px-3 py-2 border-2
            border-slate-300 rounded-md cursor-pointer">+</span>
          <span className="mt-5 ml-4 px-3.5 py-2 border-2
            border-slate-300 rounded-md cursor-pointer">-</span>
        </div>
          
        <div className="py-5 ">
          <button className="text-sm bg-gray-700 text-white py-2 px-6 w-full rounded-xl">Submit</button>
        </div> */