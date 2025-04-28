'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Code Wars</h3>
            <p className="text-gray-400">
              Building exceptional digital experiences for businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Hurghada, Egypt</li>
              <li>codewars89@gmail.com</li>
              <li><a href='tel:+201099600120'>+201099600120</a></li>
              <li>+201003472237</li>
              <li>+201009425750</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/share/18Vfcd44mv/?mibextid=wwXIfr"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
              >
                Facebook
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/codewars_x"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
              >
                Instagram
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CodeWars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 