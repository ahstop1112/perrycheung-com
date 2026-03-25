'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import TopMobileMenu from '../TopMobileMenu';
// import Social from '../Social';
import styles from './MobileHeader.module.scss';

const sections = ['home', 'about', 'works', 'skills', 'contact'];

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

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

  return (
    <div className={`${styles.mobileMenu} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.topbarInner}>
        <div className={styles.container}>
          <div className={styles.topbarIn}>
            <div className={styles.logo}>
              <Link href="/" aria-label="Go to homepage">
                <img src="/img/logo/light.png" alt="Perry Cheung" />
              </Link>
            </div>

            <button
              type="button"
              className={styles.trigger}
              onClick={handleToggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <div
                className={`${styles.hamburger} ${
                  isMenuOpen ? styles.active : ''
                }`}
              >
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.dropdown} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.container}>
          <div className={styles.dropdownInner}>
            <TopMobileMenu menuItems={sections} onItemClick={handleCloseMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;