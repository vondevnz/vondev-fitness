import Link from "next/link"
import { IoSettingsOutline, IoAddCircleOutline } from 'react-icons/io5'

export default function HomeLogged() {
  return (
    <div className="flex justify-around gap-3">
      <div className=" bg-gray-700 text-white py-3 rounded-xl grow">
        <Link href={"./addWorkout"}>
          <div className="flex justify-center gap-2">
            <h1 className=" text-sm">Add Workout</h1>
            <IoAddCircleOutline className="text-xl"/>
          </div>
        </Link>  
      </div>
      <Link href={"/"}>
        <div className=" text-center text-xl bg-gray-700 text-white py-3 px-6 rounded-xl">
            <IoSettingsOutline/>
        </div>
      </Link>
    </div>
    
  )
  //RENDER OUT WORKOUTS
}