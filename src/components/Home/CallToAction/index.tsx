'use client';

import { useTranslation } from 'react-i18next';
import styles from './CallToAction.module.scss';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.inner}>
        <div className={styles.content} data-aos="fade-up" data-aos-duration="1200">
          <p className={styles.eyebrow}>
            {t('CallToAction.eyebrow', 'Contact')}
          </p>

          <h2 className={styles.title}>
            {t('CallToAction.title', 'Let’s build something solid')}
          </h2>

          <p className={styles.description}>
            {t(
              'CallToAction.description',
              'I’m open to senior frontend and full-stack opportunities focused on product quality, performance, and long-term maintainability.'
            )}
          </p>
        </div>

        <div
          className={styles.card}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className={styles.item}>
            <span className={styles.label}>
              {t('CallToAction.locationLabel', 'Location')}
            </span>
            <p className={styles.value}>Vancouver, BC, Canada</p>
          </div>

          <div className={styles.item}>
            <span className={styles.label}>
              {t('CallToAction.emailLabel', 'Email')}
            </span>
            <p className={styles.value}>
              <a href="mailto:perry@perrycheung.com">perry@perrycheung.com</a>
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href="mailto:perry@perrycheung.com"
              className={styles.primaryButton}
            >
              {t('CallToAction.emailMe', 'Email Me')}
            </a>

            <a
              href="https://www.linkedin.com/in/perrycheung1112/"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryButton}
            >
              {t('CallToAction.linkedin', 'LinkedIn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;