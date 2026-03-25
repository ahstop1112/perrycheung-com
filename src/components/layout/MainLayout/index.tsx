import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layoutRoot}>
      <Header />
      <main className={styles.layoutMain}>
        <div className={styles.layoutContent}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;