'use client';

import { useTranslation } from 'react-i18next';
import styles from './FeatureProjects.module.scss';

const FeatureProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Enterprise POS System Refactor',
      subtitle: 'TechPOS',
      description:
        'Led the frontend refactor of a large-scale enterprise POS system, simplifying an overgrown Redux architecture while improving maintainability and supporting ongoing feature delivery.',
      meta: [
        'Senior Frontend / Full-Stack Developer',
        'React, Architecture Refactor, Data Visualization',
      ],
    },
    {
      title: 'Next.js E-commerce Platform',
      subtitle: 'Sniff & Frolic Pet Store',
      description:
        'Designed and built a Next.js-based e-commerce platform with a focus on frontend architecture, product presentation, and performance for a small product-focused brand.',
      meta: [
        'Product-focused Full-Stack Developer',
        'Next.js, E-commerce, UX-driven Development',
      ],
    },
    {
      title: 'Content Management Systems',
      subtitle: 'Simplicity CMS',
      description:
        'Built and maintained CMS-driven websites and internal tools, balancing editor flexibility, usability, and long-term maintainability across content-heavy projects.',
      meta: [
        'Frontend / Full-Stack Developer',
        'CMS Architecture, Content-driven UI, Complex Forms',
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