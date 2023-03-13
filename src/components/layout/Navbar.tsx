import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemType {
  name: string;
  href: string;
}

const navItems: NavItemType[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'scan',
    href: '/scan',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];
export const Navbar = () => {
  const router = useRouter();

  return (
    <motion.nav
      className={
        'sticky top-0 relative z-10 w-screen bg-primary shadow-md shadow-gray-900/50'
      }
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={'flex justify-between p-3 m-auto max-w-6xl'}
      >
        <div className={'flex text-white my-auto'}>LOGO</div>
        <div>
          <ul className={'flex'}>
            {navItems.map((item, index) => (
              <Link href={item.href} key={index} className={'mx-4'}>
                <motion.p
                  className={`text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors active:bg-gray-500 ${
                    router.pathname === item.href ? 'bg-secondary' : ''
                  }`}
                >
                  {item.name}
                </motion.p>
              </Link>
            ))}
          </ul>
        </div>
        <div className={'my-auto'}>
          <Link href={'/scan'}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={'bg-secondary text-white px-6 py-2 rounded-md'}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};
