import { motion } from 'framer-motion';

export const FeatureSection = () => {
  return (
    <div className={'bg-gradient-to-r from-gray-600 to-primary py-40'}>
      <div className={'max-w-7xl mx-auto px-4 rounded-md sm:px-6 lg:px-8'}>
        <div className={'lg:text-center'}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={'text-3xl font-extrabold text-gray-100 sm:text-4xl'}
          >
            Our Web3 Vulnerability Scanner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={'mt-4 text-lg text-gray-300 sm:max-w-xl sm:mx-auto'}
          >
            Protect your smart contracts from vulnerabilities and ensure the
            security of your decentralized applications with our advanced web3
            vulnerability scanner. Our scanner checks your smart contracts
            against a list of known vulnerabilities and reports any issues that
            are found.
          </motion.p>
        </div>

        <div className={'mt-20'}>
          <div
            className={'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={'pt-6'}
              viewport={{ once: true }}
            >
              <div className={'flow-root bg-gray-100 rounded-lg px-6 pb-8'}>
                <div className={'mt-6'}>
                  <div>
                    <span
                      className={
                        'inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg'
                      }
                    >
                      <svg
                        className={'h-6 w-6 text-white'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    className={
                      'mt-8 text-lg font-medium text-gray-900 tracking-tight'
                    }
                  >
                    Real-time Scanning
                  </h3>
                  <p className={'mt-5 text-base text-gray-500'}>
                    Our scanner checks your smart contracts in real-time,
                    ensuring that any newly discovered vulnerabilities are
                    caught and reported as soon as possible.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={'pt-6'}
              viewport={{ once: true }}
            >
              <div className={'flow-root bg-gray-100 rounded-lg px-6 pb-8'}>
                <div className={'mt-6'}>
                  <div>
                    <span
                      className={
                        'inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg'
                      }
                    >
                      <svg
                        className={'h-6 w-6 text-white'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    className={
                      'mt-8 text-lg font-medium text-gray-900 tracking-tight'
                    }
                  >
                    Real-time Scanning
                  </h3>
                  <p className={'mt-5 text-base text-gray-500'}>
                    Our scanner checks your smart contracts in real-time,
                    ensuring that any newly discovered vulnerabilities are
                    caught and reported as soon as possible.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={'pt-6'}
              viewport={{ once: true }}
            >
              <div className={'flow-root bg-gray-100 rounded-lg px-6 pb-8'}>
                <div className={'-mt-6'}>
                  <div>
                    <span
                      className={
                        'inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg'
                      }
                    >
                      <svg
                        className={'h-6 w-6 text-white'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    className={
                      'mt-8 text-lg font-medium text-gray-900 tracking-tight'
                    }
                  >
                    Real-time Scanning
                  </h3>
                  <p className={'mt-5 text-base text-gray-500'}>
                    Our scanner checks your smart contracts in real-time,
                    ensuring that any newly discovered vulnerabilities are
                    caught and reported as soon as possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
