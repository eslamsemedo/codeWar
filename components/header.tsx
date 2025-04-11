"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" fixed w-full md:block z-50 p-1 top-1 font-sans col-span-full">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#004AAD] to-[#3f72a5]  shadow-xl p-3 rounded-xl h-14">
          <h1 className="text-xl font-bold text-gray-800">
            <span className='text-[#7396c3]'>Code</span>
            <span>Wars</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li className="hover:text-[#8592bb] cursor-pointer">Home</li>
            <li className="hover:text-[#8592bb] cursor-pointer">About</li>
            <li className="hover:text-[#8592bb] cursor-pointer">Blog</li>
            <li className="hover:text-[#8592bb] cursor-pointer">Contact Us</li>
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
    </>
  );
}
