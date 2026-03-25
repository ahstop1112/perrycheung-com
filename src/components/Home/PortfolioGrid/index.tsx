'use client';

import React, { SyntheticEvent, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Tabs, Tab, Box } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { tagList, categoryListContent, heights } from '@/data/portfolio';
import styles from './PortfolioGrid.module.scss';

const PortfolioGrid = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [currentTag, setCurrentTag] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const sortedProjects = useMemo(() => {
    return [...categoryListContent].sort((p1, p2) =>
      p1.content.projectDate < p2.content.projectDate
        ? 1
        : p1.content.projectDate > p2.content.projectDate
          ? -1
          : 0
    );
  }, []);

  const currentItems = useMemo(() => {
    const tag = tagList[currentTag];
    return sortedProjects.filter((item) => (tag !== 'All' ? item.category === tag : true));
  }, [currentTag, sortedProjects]);

  const slides = currentItems.map((item) => ({
    src: `/img/portfolio/${item.category.toLowerCase()}/${item.img}`,
  }));

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setCurrentTag(newValue);
    setLightboxIndex(-1);
  };

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.header}>
        <div className={styles.sectionTitle}>
          <span>{t('Portfolio.title')}</span>
          <h3>{t('Home.creativePortfolio')}</h3>
        </div>
        <Tabs className={styles.tabList} value={currentTag} onChange={handleChange} aria-label="portfolio tabs">
          {tagList.map((val, i) => (
            <Tab
              key={val}
              label={val}
              id={`portfolio-tab-${i}`}
              aria-controls={`portfolio-tabpanel-${i}`}
            />
          ))}
        </Tabs>
      </div>
      <Box className={styles.portfolioFilter}>
        <ul className={styles.grid}>
          {currentItems.map((item) => (
            <li key={item.slug} className={styles.card}>
              <div
                className={styles.imageWrap}
                onClick={() =>
                  router.push(
                    `/portfolio/${item.category.toLowerCase()}/${item.content.projectDate}/${item.slug}`
                  )
                }
              >
                <img
                  src={`/img/portfolio/${item.category.toLowerCase()}/${item.img}`}
                  alt={item.title}
                />
              </div>

              <div className={styles.meta}>
                <div className={styles.title}>
                  {item.title}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Box>
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
};

export default PortfolioGrid;