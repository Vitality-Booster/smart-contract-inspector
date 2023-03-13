import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className={'relative bg-gradient-to-r from-gray-600 to-primary'}>
      <div className={'absolute inset-0'}>
        <div
          className={'absolute inset-0 bg-primary'}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
        />
      </div>
      <div className={'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={
            'text-4xl font-extrabold text-white sm:text-5xl md:text-6xl text-center'
          }
        >
          Web3 Vulnerability Scanner
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={'mt-6 max-w-3xl text-xl text-gray-200 text-center mx-auto'}
        >
          Protect your smart contracts from vulnerabilities and ensure the
          security of your decentralized applications with our web3
          vulnerability scanner.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={'mt-10 flex justify-center'}
        >
          <Link href={'/scan'}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={'bg-secondary text-white px-6 py-2 rounded-md'}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
