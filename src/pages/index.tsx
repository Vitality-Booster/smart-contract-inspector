import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { Footer } from '@/components/layout/Footer';
import { FeatureSection } from '@/components/layout/FeatureSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Web3 vulnerability scanner | Protect your smart contracts</title>
        <meta
          name={'description'}
          content={
            'Protect your smart contracts from vulnerabilities and ensure the security of your decentralized applications with our web3 vulnerability scanner.'
          }
        />
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1'}
        />
        <meta name={'theme-color'} content={'#252F3F'} />
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <Navbar />
      <Hero />
      <FeatureSection />
      <Footer />
    </>
  );
}
