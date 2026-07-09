'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
        once: true,
        offset: 80,
        disable: () => {
            return window.innerWidth < 768;
        },
    });
      
    console.log('AOS initialized');

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return children;
};