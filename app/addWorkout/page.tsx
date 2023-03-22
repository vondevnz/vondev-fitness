export default function AddWorkout() {

  return (
    <div className="px-2">
      <form>
        <label className="block">
        <div>
          <span className="block text-sm font-medium text-slate-700">Workout</span>
          <input type="text" placeholder="Name of your workout" className="mt-1 block 
          w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm 
          placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 
          focus:ring-sky-500
          " name="name"/>
        </div>

        <div className="flex">
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
        </div>
        </label>
      </form>
    </div>
  )
}