"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'


export default function header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" fixed w-full md:block z-50 p-1 top-1 font-sans col-span-full">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#004AAD] to-[#4a7fb5]  shadow-xl p-3 rounded-xl h-14">
        <h1 className="text-xl font-bold text-gray-800">Logo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Blog</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >

        {isOpen && (
          <ul className="bg-white rounded-4xl flex flex-col items-center gap-4 py-4 font-medium">
            <li className="text-blue-600 cursor-pointer ">Home</li>
            <li className="text-blue-600 cursor-pointer">About</li>
            <li className="text-blue-600 cursor-pointer">Blog</li>
            <li className="text-blue-600 cursor-pointer">Contact Us</li>
          </ul>
        )}
      </div>
    </div>
  );


  // return (
  //   <>
  //     <header className=" fixed w-full md:block z-50 p-1 top-1 font-sans col-span-full">
  //       <div className=' bg-gradient-to-r from-[#004AAD] to-[#4a7fb5]  shadow-xl flex justify-between items-center max-w-6xl mx-auto p-3 rounded-xl h-14'>
  //         <h1 className=' transform translate-x-7 font-bold text-sm sm:text-xl flex flex-wrap'>
  //           <span className='text-slate-400'>Code</span>
  //           <span className='text-slate-100'>Wars</span>
  //         </h1>
  //         <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base font-medium text-gray-700">
  //           <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">Home</li>
  //           <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">About</li>
  //           <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">Blog</li>
  //           <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">Contact Us</li>
  //         </ul>
  //       </div>
  //     </header >
  //   </>
  // )
}
