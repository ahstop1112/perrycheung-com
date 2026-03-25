'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './TopMenu.module.scss';

const sections = ['home', 'about', 'works', 'skills', 'contact'];

const TopMenu = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150) {
          current = section;
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.menu}>
      <ul className={styles.anchorNav}>
        {sections.map((item) => (
          <li
            key={item}
            className={`${styles.menuItem} ${
              active === item ? styles.current : ''
            }`}
          >
            <a href={`/#${item}`} className={styles.menuLink}>
              {t(`Home.${item}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopMenu;