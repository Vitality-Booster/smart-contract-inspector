import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ScanInputComponent = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [results, setResults] = useState<boolean>();
  const [error, setError] = useState<string>();
  const submitCode = async () => {
    try {
      setError(undefined);
      setResults(undefined);
      setLoading(true);
      const res = await fetch('http://localhost:3000/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          solidityContract: code,
        }),
      });

      if (!res.ok) {
        setResults(undefined);
        setLoading(false);
        setError('Something went wrong. Please try again later.');
        return;
      }
      const result = await res.text();
      console.log(result);
      result.toLowerCase().includes('true')
        ? setResults(true)
        : setResults(false);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError('Something went wrong. Please try again later.');
      setResults(undefined);
      setLoading(false);
    }
  };
  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 'px';
    }
  };

  return (
    <>
      {error && (
        <div
          className={
            'bg-red-100 border border-red-400 text-red-700 px-4 py-3 m-auto my-4 max-w-6xl rounded relative flex items-center justify-center flex-col'
          }
          role={'alert'}
        >
          <h1 className={'text-4xl font-bold text-red-700 mb-4'}>Error!</h1>
          <span className={'block sm:inline'}> {error}</span>
        </div>
      )}

      {loading ? (
        <div className={'flex justify-center items-center m-4'}>
          <div
            className={
              'animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'
            }
          ></div>
        </div>
      ) : (
        <>
          {results === undefined ? null : results ? (
            <div
              className={
                'bg-red-100 border border-red-400 text-red-700 px-4 py-3 m-auto my-4 max-w-6xl rounded relative flex items-center justify-center flex-col'
              }
              role={'alert'}
            >
              <h1 className={'text-4xl font-bold text-red-700 mb-4'}>
                Vulnerabilities found!
              </h1>
              <p>
                <strong className={'font-bold'}>Warning! </strong>
                <span className={'block sm:inline'}>
                  Your smart contract contains vulnerabilities. Please fix them
                  before deploying your smart contract.
                </span>
              </p>
            </div>
          ) : (
            <div
              className={
                'bg-green-100 max-w-6xl m-auto my-4 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-center justify-center flex-col'
              }
            >
              <h1 className={'text-4xl font-bold text-gray-700 mb-4'}>
                No vulnerabilities found!
              </h1>
            </div>
          )}
        </>
      )}
      <div
        className={
          'flex flex-col md:flex-row bg-gray-200 shadow-md max-w-7xl m-auto'
        }
      >
        <div className={'w-full md:w-1/2 p-6'}>
          <h2 className={'text-xl font-bold text-gray-700 mb-4'}>
            Solidity smart contract code
          </h2>
          <textarea
            ref={textAreaRef}
            disabled={loading}
            className={
              'w-full resize-none rounded-lg shadow-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-700 placeholder-gray-500 p-4 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50'
            }
            placeholder={
              'Paste your Solidity code here to scan for vulnerabilities.'
            }
            value={code}
            onChange={handleCodeChange}
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={
              'mt-4 w-full transition-colors inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md font-bold text-white bg-secondary hover:bg-gray-700 active:bg-gray-500 disabled:bg-gray-300 disabled:pointer-events-none'
            }
            disabled={code.trim().length === 0}
            onClick={submitCode}
          >
            Scan
          </motion.button>
        </div>
        <div className={'w-full md:w-1/2 p-6 bg-white'}>
          <h2 className={'text-xl font-bold text-gray-700 mb-4'}>
            Solidity code preview
          </h2>
          <SyntaxHighlighter
            language={'solidity'}
            style={materialLight}
            showLineNumbers
            customStyle={{
              minHeight: '80px',
              borderRadius: '0.5rem',
              fontSize: '.5',
              lineHeight: '1.5',
              padding: '1rem',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};
