import { motion } from 'framer-motion';

export const ScanHeroComponent = () => {
  return (
    <section className={'bg-gray-800'}>
      <div className={'max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'}>
        <div className={'sm:text-center lg:text-left'}>
          <motion.h1
            className={
              'text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'
            }
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Smart Contract Vulnerability Scanner
          </motion.h1>
          <motion.p
            className={
              'mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
            }
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check if your smart contracts are vulnerable to attacks and ensure
            the security of your decentralized applications with our web3
            vulnerability scanner.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
