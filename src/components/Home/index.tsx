'use client';

import React, { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout'; 
import Slider from "./Slider";
import About from "./About";
import PortfolioGrid from './PortfolioGrid';
import Skills from './Skills';
import FeatureProjects from './FeatureProjects';
import CallToAction from './CallToAction';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MainLayout>
      <div className='mainBody'>
        <Slider />
        <About />
        <FeatureProjects />
        <PortfolioGrid />
        <Skills />
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default Home;
