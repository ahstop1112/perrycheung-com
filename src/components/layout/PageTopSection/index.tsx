"use client";

import { useEffect, useState, useRef, useCallback, ReactNode } from 'react';
import styles from './PageTopSection.module.scss';

type PageTopSectionProps = {
  children: ReactNode;
};

const PageTopSection = ({ children }: PageTopSectionProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

    const toggleSticky = useCallback(({ top, bottom }:
        { top: number, bottom: number }) => {
            if (top <= 0 && bottom > 2 * 68) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      toggleSticky(headerRef.current.getBoundingClientRect());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toggleSticky]);

  return (
    <div
      className={styles.pageHeader}
      ref={headerRef}
    >
      {children}
    </div>
  );
};

export default PageTopSection;