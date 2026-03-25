'use client';

import { useTranslation } from 'react-i18next';
import styles from './TopMobileMenu.module.scss';

type TopMobileMenuProps = {
  menuItems: string[];
  onItemClick?: () => void;
};

const TopMobileMenu = ({ menuItems, onItemClick }: TopMobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <li key={item} className={styles.menuItem}>
          <a
            href={`/#${item}`}
            className={styles.menuLink}
            onClick={onItemClick}
          >
            {t(`Home.${item}`)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TopMobileMenu;