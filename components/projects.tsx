"use client";
import { motion } from 'framer-motion';
import { ArrowBigRight } from 'lucide-react';
import React from 'react'

export default function projects() {


  const projects = [
    {
      title: 'Ozone',
      description: 'Your all-in-one platform for workouts, nutrition, and fitness tracking.',
      icon: "",
      devolop: true,
      url: "https://ozone-blush.vercel.app/",
      haveLink: true
    },
    {
      title: 'Clone of linkedin',
      description: 'A professional networking platform to connect, share, and grow your career.',
      icon: "",
      devolop: true,
      url: "https://linkedin-nextjs-puce.vercel.app/",
      haveLink: true

    },
    {
      title: 'Smart leader',
      description: 'A space to connect, share ideas, and grow together as a community.',
      icon: "",
      devolop: true,
      url: "https://smart-leaders-yyv9745kw4cggqnj.builder-preview.com/",
      haveLink: true

    },
    {
      title: 'Hot Air Balloon in Luxor',
      description: 'Experience the magic of Luxor from above with a breathtaking hot air balloon ride.',
      icon: "",
      devolop: true,
      url: "",
      haveLink: false

    },
  ];
  return (

    <section className='py-20 bg-white'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600">
            Showcasing the work we&apos;ve crafted with passion and precision.
          </p>
        </motion.div>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-9 py-20'>

        {
          projects.map((project, index) => (

            <div key={index} className="w-[252px] h-[350px] bg-white rounded-[30px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] transition-all duration-200 ease-in-out hover:cursor-pointer hover:scale-110">
              <div className="w-full h-1/2 rounded-t-[30px] bg-gradient-to-b from-[#3B536C] to-[#9198e5] flex justify-end items-start">
                {
                  project.devolop
                    ? <div className="w-[150px] h-[30px] bg-[#d57637] rounded-full flex items-center justify-center mt-5 mr-5">
                      on Development
                    </div>
                    : <div className="w-[150px] h-[30px] bg-[#00b140] rounded-full flex items-center justify-center mt-5 mr-5">
                      completed
                    </div>
                }
              </div>

              <div className="m-5 flex flex-col justify-around gap-2 h-[25%]">
                <p className="font-semibold text-[15px] text-black">
                  {project.title}
                </p>
                <p className="text-sm text-gray-500">
                  {project.description}
                </p>
              </div>
              {
                project.haveLink &&
                <a href={project.url} target="_blank" className="mt-4 ml-2.5 w-[70%] px-3 py-2 bg-[#e3fff9] rounded-[10px] flex items-center hover:cursor-pointer hover:bg-[#d1f7ee] transition-all duration-200 ease-in-out">
                  <ArrowBigRight className="w-[15px] h-[15px] fill-[#0026b1]" />
                  <p className="ml-2 text-sm font-medium text-[#9198e5]">
                    visit website
                  </p>
                </a>
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}




