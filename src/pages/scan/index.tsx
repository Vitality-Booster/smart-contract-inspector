import Head from 'next/head';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScanHeroComponent } from '@/components/scan/ScanHeroComponent';
import { ScanInputComponent } from '@/components/scan/ScanInputComponent';

export default function Scan() {
  return (
    <>
      <Head>
        <title>Scan | Web3 vulnerability scanner</title>
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1'}
        />
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
      <ScanHeroComponent />
      <ScanInputComponent />
      <Footer />
    </>
  );
}
