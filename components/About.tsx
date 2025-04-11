'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            About Code War
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At WebForge, we&apos;re passionate about creating exceptional digital experiences that help businesses thrive in the modern web landscape. Our mission is to empower businesses with custom web solutions that not only look great but also drive real results.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            We specialize in building responsive, user-friendly websites that combine stunning design with powerful functionality. Whether you&apos;re a small business looking to establish your online presence or a large enterprise seeking to enhance your digital capabilities, we&apos;re here to help you succeed.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 