'use client';

import { useTranslation, Trans } from 'react-i18next';
import { skillTypeData } from '@/data/portfolio';
import styles from './Skills.module.scss';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className={`${styles.parallaxBg} ${styles.skillsSection} tm_portfolio`}
    >
        <div className={styles.title} data-aos="fade-up" data-aos-duration="300">
          <span>{t('Skills.title')}</span>
        </div>

        <div
          className={styles.skillsContainer}
          data-aos="fade-right"
          data-aos-duration="900"
        >
          {skillTypeData?.length > 0 &&
            skillTypeData.map((item) => (
              <div
                key={item.title}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={item.delayAnimation}
                className={item.title === "coreStack" ? styles.core : item.title === "frontendDev" ? styles.frontend : ``}
              >
                <h5>{t(`Skills.${item.title}`)}</h5>

                <div className={styles.skillsImageContainer}>
                  {item.images.map((image) => (
                    <div
                      key={image.label}
                      className={styles.skillsImage}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={image.delayAnimation}
                    >
                      {image.img ?<img
                        src={`/img/skills/${image.img}`}
                        className={styles.logo}
                        alt={t(`Skills.${image.label}`)}
                      />: null}
                      <span className={styles.label}>
                        {t(`Skills.${image.label}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
    </section>
  );
};

export default Skills;