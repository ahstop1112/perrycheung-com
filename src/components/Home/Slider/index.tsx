'use client';
import { useCallback } from "react";
import { useTranslation } from 'react-i18next'; 
import Particles from 'react-tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { ParticlesConfig } from "@/utility/particle.config";
import styles from './Slider.module.scss';

const Slider = () => {
  const { t } = useTranslation();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const highlights = [
    t(
      'Slider.highlightOne',
      'Designed end-to-end POS workflows bridging online ordering and in-store operations'
    ),
    t(
      'Slider.highlightTwo',
      'Built headless CMS platforms powering flexible, scalable content experiences'
    ),
    t(
      'Slider.highlightThree',
      'Engineered real-time trading and operations systems for high-volume data environments'
      )
  ]
  
  return (
    <section id="home" className={styles.sliderSection}>
      <div className={styles.particlesLayer}>
        <Particles id="particles" init={particlesInit} options={ParticlesConfig} />
      </div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {t('Slider.eyebrow', 'Senior Frontend Engineer')}
          </p>
          <h1 className={styles.title}>
            {t('Slider.titleLine1', 'I build scalable frontend systems')}
            <br />
            <span className={styles.accent}>
              {t('Slider.titleLine2', 'for high-performance, data-driven products')}
            </span>
          </h1>
          <p className={styles.description}>
            {t(
              'Slider.description',
              'I design and build frontend systems that stay stable under real-world complexity, from POS environments to high-frequency trading workflows.'
            )}
          </p>

          <div className={styles.actions}>
            <a href="/#works" className={styles.primaryButton}>
              {t('Slider.viewWork', 'View Work')}
            </a>
            <a href="/#contact" className={styles.secondaryButton}>
              {t('Slider.contactMe', 'Contact Me')}
            </a>
          </div>

          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item} className={styles.highlightItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sideCard}>
          <div className={styles.card}>
            <p className={styles.cardEyebrow}>
              {t('Slider.cardEyebrow', 'At a glance')}
            </p>

            <div className={styles.statList}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10+</span>
                <span className={styles.statLabel}>
                  {t('Slider.statOne', 'Years building production systems')}
                </span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statValue}>5</span>
                <span className={styles.statLabel}>
                  {t('Slider.statTwo', 'Enterprise trading platforms')}
                </span>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statValue}>10,000+</span>
                <span className={styles.statLabel}>
                  {t('Slider.statThree', 'Records handled with zero UI lag')}
                </span>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.metaBlock}>
              <p className={styles.metaTitle}>
                {t('Slider.stackTitle', 'Core Stack')}
              </p>
              <p className={styles.metaText}>
                React · Next.js · TypeScript · Node.js
              </p>
              <p className={styles.metaFooter}>
                Vancouver · Open to work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;