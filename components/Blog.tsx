'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const blogPosts = [
  {
    title: 'Web Development Best Practices',
    description: 'Learn about the latest trends and best practices in web development to create stunning websites.',
    icon: DocumentTextIcon,
    date: 'April 10, 2024',
  },
  {
    title: 'Digital Marketing Strategies',
    description: 'Discover effective digital marketing strategies to grow your online presence and reach more customers.',
    icon: ChartBarIcon,
    date: 'April 9, 2024',
  },
  {
    title: 'Startup Success Stories',
    description: 'Explore inspiring stories of successful startups and learn from their journey to success.',
    icon: RocketLaunchIcon,
    date: 'April 8, 2024',
  },
];

export default function Blog() {
  return (
    <section id='blog' className="py-20 bg-gray-50 ">
      <div className="container mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600">
            Insights, tips, and stories to help your business thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-[#85b3df] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <post.icon className="h-12 w-12 text-blue-600 mb-4" />
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.description}
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 