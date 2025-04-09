'use client';
// import Googy from './Googy';
import Eye from './eye';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <Eye />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          We build websites that build your business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl mb-8 text-gray-200"
        >
          Transform your online presence with custom web solutions
        </motion.p>
        {/* <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          Get a Quote
        </motion.button> */}
        {/* <Googy /> */}
      </div>
    </section>
  );
} 