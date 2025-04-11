"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" fixed w-full md:block z-50 p-3 md:p-1 top-1 font-sans col-span-full">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#1068dc] to-[#78a4d1]  shadow-xl p-3 rounded-xl h-14">
          <h1 className="text-xl font-bold text-gray-800">
            <span className='text-[#7396c3]'>Code</span>
            <span>Wars</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li className="hover:text-[#2e507f] transition-all duration-200 cursor-pointer">
              <a href='#' className=' decoration-none'>
                Home
              </a>
            </li>
            <li className="hover:text-[#2e507f] transition-all duration-200 cursor-pointer">
              <a href='#about' className=' decoration-none'>
                About
              </a>
            </li>
            <li className="hover:text-[#2e507f] transition-all duration-200 cursor-pointer">
              <a href='#blog' className=' decoration-none'>
                Blog
              </a>
            </li>
            <li className="hover:text-[#2e507f] transition-all duration-200 cursor-pointer">
              <a href='#contact' className=' decoration-none'>
                Contact Us
              </a>
            </li>
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
        {/* <div
          className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-80 opacity-85' : 'max-h-0 opacity-0'}`}
        >

          {isOpen && (
            <ul className="bg-[#dfeaf3] rounded-4xl flex flex-col items-center gap-4 py-4 font-medium">
              <li className="text-blue-600 cursor-pointer p-4">Home</li>
              <li className="text-blue-600 cursor-pointer p-4">About</li>
              <li className="text-blue-600 cursor-pointer p-4">Blog</li>
              <li className="text-blue-600 cursor-pointer p-4">Contact Us</li>
            </ul>
          )}
        </div> */}


        <div
          className={`md:hidden mt-2 overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <ul
            className={`
      bg-gradient-to-r from-[#1068dc] to-[#78a4d1] rounded-xl flex flex-col items-center gap-4 py-4 font-medium transition-opacity duration-500
      ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}
          >
            <li className=" cursor-pointer p-4">Home</li>
            <li className=" cursor-pointer p-4">About</li>
            <li className=" cursor-pointer p-4">Blog</li>
            <li className=" cursor-pointer p-4">Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}
