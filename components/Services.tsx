'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ComputerDesktopIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Custom Web Design',
    description: 'Unique, responsive websites tailored to your brand and business needs.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Powerful online stores that drive sales and provide seamless shopping experiences.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your websites visibility and attract more organic traffic.',
    icon: MagnifyingGlassIcon,
  },
  {
    title: 'Ongoing Support',
    description: 'Dedicated support to keep your website running smoothly and up-to-date.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive web solutions to help your business grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-[#85b3df] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 