'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { categoryListContent } from "@/data/portfolio";
import ContentHeader from './ContentHeader';
import Gallery from '../Gallery';
import styles from './Content.module.scss';

type ContentProps = {
  slug: string;
};

const Content = ({ slug }: ContentProps) => {
  const { t } = useTranslation();

  const portfolio = categoryListContent.find((item) => item.slug === slug);

  const { category, title, content } = portfolio || {};
  const {
    description,
    projectDate,
    companyName,
    hashtags,
    imgItems,
    liveLinks,
    gitLink,
  } = content || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!portfolio) {
    return (
      <main className={styles.portfolioPage}>
        <section className={`${styles.body} container`}>
          <p className={styles.notFound}>Project not found.</p>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.portfolioPage}>
      <section className={`${styles.body} container`}>
        <ContentHeader title={title} category={category} />

        <div className={styles.contentLayout}>
          <div className={styles.leftImgBody}>
            {imgItems && imgItems.length > 0 && (
              <Gallery category={category} imgItems={imgItems} />
            )}
          </div>

          <div className={styles.rightDescBody}>
            <section className={styles.topSection}>
              <h3 className={styles.title}>{title}</h3>

              <div className={styles.category}>{category}</div>

              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>
                  {t('Portfolio.companyName')}:
                </span>
                <span className={styles.metaValue}>{companyName}</span>
              </div>

              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>
                  {t('Portfolio.projectDate')}:
                </span>
                <span className={styles.metaValue}>{projectDate}</span>
              </div>

              {liveLinks && liveLinks.length > 0 && (
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>
                    {t('Portfolio.liveLinks')}:
                  </span>
                  <span className={styles.linkGroup}>
                    {liveLinks.map((link) => (
                      <a
                        key={link?.title}
                        href={link?.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                      >
                        {link?.title}
                      </a>
                    ))}
                  </span>
                </div>
              )}

              {gitLink && gitLink.length > 0 && (
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>
                    {t('Portfolio.gitLink')}:
                  </span>
                  <span className={styles.linkGroup}>
                    {gitLink.map((link) => (
                      <a
                        key={link?.title}
                        href={link?.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                      >
                        {link?.title}
                      </a>
                    ))}
                  </span>
                </div>
              )}

              {description && description.length > 0 && (
                <div className={styles.description}>
                  {description.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              )}
            </section>

            {hashtags && hashtags.length > 0 && (
              <section className={styles.hashtags}>
                {hashtags.map((item) => (
                  <span key={item} className={styles.hashtag}>
                    {item}
                  </span>
                ))}
              </section>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;