'use client';

import { useTranslation } from 'react-i18next';
import styles from './FeatureProjects.module.scss';

const FeatureProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Trading Platform Form Engine',
      subtitle: 'Haitong International',
      description:
        'Architected a JSON schema-driven form engine adopted across 5+ institutional trading platforms, replacing hand-coded forms with a configurable system while leading a team of four engineers.',
      meta: [
        'Lead Frontend Engineer / UX Architect',
        'React, TypeScript, JSON Schema, Design System',
      ],
    },
    {
      title: 'Commerce & POS Platform',
      subtitle: 'Sniff & Frolic — Pet Industry',
      description:
        'Built an end-to-end commerce and point-of-sale platform from scratch for a Pet brand I founded — storefront, checkout, inventory, and in-person market sales — architected as a Next.js and NestJS monorepo on PostgreSQL, running in production.',
      meta: [
        'Founder / Full-Stack Engineer',
        'Next.js, NestJS, PostgreSQL, Monorepo',
      ],
    },
    {
      title: 'Content Management Systems',
      subtitle: 'Simplicity CMS',
      description:
        'Built and maintained CMS-driven websites and internal tools, balancing editor flexibility, usability, and long-term maintainability across content-heavy projects.',
      meta: [
        'Frontend / Full-Stack Engineer',
        'CMS Architecture, Content-driven UI, Complex Forms width drag & drop',
      ],
    },
  ];

  return (
    <section id="works" className={styles.featureProjectSection}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            {t('Home.FeaturedProjects', 'Featured Projects')}
          </span>
          <h2 className={styles.title}>
            {t('Home.selectedWork', 'Selected Work')}
          </h2>
          <p className={styles.description}>
            {t(
              'Home.selectedWorkDescription',
              'A few projects that reflect the kind of systems I build: complex, operational, and designed to last.'
            )}
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={styles.card}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={index * 120}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
              </div>

              <p className={styles.cardDescription}>{project.description}</p>

              <div className={styles.metaBlock}>
                <p className={styles.metaItem}>
                  <span>Role:</span> {project.meta[0]}
                </p>
                <p className={styles.metaItem}>
                  <span>Focus:</span> {project.meta[1]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;