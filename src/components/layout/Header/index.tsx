'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TopMenu from '../TopMenu';
import MobileHeader from '../MobileHeader';
import styles from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isOpened = isScrolled || pathname.includes('/portfolio');

  return (
    <>
      <header className={styles.topBar}>
        <div className={`${styles.topBarInner} ${isOpened ? styles.opened : ''}`}>
          <div className={styles.logo}>
            <Link href="/" aria-label="Go to homepage">
              <img src="/img/logo/light.png" alt="Perry Cheung" />
            </Link>
          </div>

          <TopMenu />
        </div>
      </header>

      <MobileHeader />
    </>
  );
};

export default Header;