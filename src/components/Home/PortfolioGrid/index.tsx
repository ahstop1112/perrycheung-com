'use client';

import React, { SyntheticEvent, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import NextLink from 'next/link';
import { Tabs, Tab, Box } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { tagList, categoryListContent } from '@/data/portfolio';
import styles from './PortfolioGrid.module.scss';

interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  img: string;
  hashtags?: string[];
  content: {
    projectDate: string;
    description?: string;
  };
}

const PortfolioGrid = () => {
  const { t } = useTranslation();

  const [currentTag, setCurrentTag] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const currentItems = useMemo(() => {
    const tag = tagList[currentTag];

    return categoryListContent.filter((item) =>
      tag !== 'All' ? item.category === tag : true
    );
  }, [currentTag]);

  const slides = currentItems.map((item) => ({
    src: `/img/portfolio/${item.category.toLowerCase()}/${item.img}`,
  }));

  const handleChange = (
    _event: SyntheticEvent,
    newValue: number
  ) => {
    setCurrentTag(newValue);
  };

  return (
    <section
      id="portfolio"
      className={styles.portfolioSection}
    >
      <div className={styles.header}>
        <div className={styles.sectionTitle}>
          <span>{t('Portfolio.title')}</span>
          <h3>{t('Home.creativePortfolio')}</h3>
        </div>

        <Tabs
          className={styles.tabList}
          value={currentTag}
          onChange={handleChange}
          aria-label="portfolio tabs"
          variant="scrollable" scrollButtons={false}
          sx={{
              '& .MuiTabs-scroller': {
              overflowX: 'auto !important',
              },
              '& .MuiTab-root': {
                minWidth: 'auto',
                whiteSpace: 'nowrap',
              },
          }}
        >
          {tagList.map((val, i) => (
            <Tab
              key={val}
              label={val}
              value={i}
              id={`portfolio-tab-${i}`}
              aria-controls={`portfolio-tabpanel-${i}`}
            />
          ))}
        </Tabs>
      </div>

      <Box className={styles.portfolioFilter}>
        <ul className={styles.grid}>
          {currentItems.map((item: PortfolioItem) => {
            const imgSrc =
              `/img/portfolio/${item.category.toLowerCase()}/${item.img}`;

            const href =
              `/portfolio/${item.category.toLowerCase()}/${item.content.projectDate}/${item.slug}`;

            return (
              <li
                key={item.slug}
                className={styles.cardWrapper}
              >
                <NextLink
                  href={href}
                  className={styles.card}
                >
                  <div className={styles.thumb}>
                    <img
                      src={imgSrc}
                      alt={item.title}
                      className={styles.img}
                    />

                    <div className={styles.overlay}>
                      <span className={styles.viewLabel}>
                        View project     →
                      </span>    
                    </div>
                  </div>

                  <div className={styles.meta}>
                    <span className={styles.category}>
                      {item.category}
                    </span>

                    <h3 className={styles.title}>
                      {item.title}
                    </h3>
                    {item.content.description && (
                      <p className={styles.description}>
                        {item.content.description}
                      </p>
                    )}

                    {item.hashtags &&
                      item.hashtags.length > 0 && (
                        <div className={styles.tagRow}>
                          {item.hashtags.map((tag) => (
                            <span
                              key={tag}
                              className={styles.tag}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                </NextLink>
              </li>
            );
          })}
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