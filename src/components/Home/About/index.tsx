'use client';

import { useTranslation, Trans } from 'react-i18next';
import styles from './About.module.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.inner}>
        <div className={styles.media} data-aos="fade-up" data-aos-duration="1200">
          <div className={styles.imageWrapper} >
            <img
              src="/img/about/profile.jpg"
              alt="Perry Cheung"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading} data-aos="fade-up" data-aos-duration="1200">
            <span className={styles.eyebrow}>{t('About.title')}</span>
            <h2 className={styles.title}>{t('About.introTitle')}</h2>
          </div>

          <div className={styles.text} data-aos="fade-up" data-aos-duration="1200">
            <p>
              <Trans
                i18nKey="About.introContent"
                components={{ strong: <strong /> }}
              />
            </p>

            <p>
              <Trans
                i18nKey="About.introContent2"
                components={{ strong: <strong /> }}
              />
            </p>

            <p>
              <Trans
                i18nKey="About.introContent3"
                components={{ strong: <strong /> }}
              />
            </p>
          </div>

          <div className={styles.actions} data-aos="fade-up" data-aos-duration="1200">
            <a
              href="/img/resume/PerryCheungResume20260322_core.pdf"
              download
              className={styles.button}
            >
              {t('About.downloadCV')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;