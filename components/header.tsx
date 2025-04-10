import React from 'react'

export default function header() {
  return (
    <>
      <header className=" md:block z-50 sticky p-1 top-1 font-sans col-span-full">
        <div className=' bg-gradient-to-r from-[#004AAD] to-[#4a7fb5]  shadow-xl flex justify-between items-center max-w-6xl mx-auto p-3 rounded-xl h-14'>
          <h1 className=' transform translate-x-7 font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-400'>Ozone</span>
            <span className='text-slate-100'>Website</span>
          </h1>
          <ul className="flex gap-2 font-semibold text-black ">
            <li className="hidden sm:inline hover:underline">home</li>
            <li className="hidden sm:inline hover:underline">about</li>
            <li>
              {/* user signed in */}
              <div className=" cursor-pointer">
                HI!
              </div>
            </li>
          </ul>
        </div>
      </header >
    </>
  )
}
