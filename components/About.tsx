'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id='about' className=" bg-white flex pt-16 p-[15px] sm:p-10 md:p-14 lg:p-20 items-center justify-center md:justify-between gap-x-20">

      <div className="md:w-[60%] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            About Code Wars
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Code Wars, we&apos;re passionate about creating exceptional digital experiences that help businesses thrive in the modern web landscape. Our mission is to empower businesses with custom web solutions that not only look great but also drive real results.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            We specialize in building responsive, user-friendly websites that combine stunning design with powerful functionality. Whether you&apos;re a small business looking to establish your online presence or a large enterprise seeking to enhance your digital capabilities, we&apos;re here to help you succeed.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 220 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className='w-[40%] hidden md:block'
      >
        <img src="/bgabout.jpeg" alt="img" className='w-[100%] h-[500px] rounded-l-full' />
      </motion.div>
    </section>
  );
} 