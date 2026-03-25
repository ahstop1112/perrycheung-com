import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Breadcrumbs as MuiBreadcrumb, Typography } from '@mui/material';
import styles from './Breadcrumb.module.scss';

type Props = {
  currentLinkTag: string;
  lv1Tag?: string;
  lv1Link?: string;
  lv2Tag?: string;
  lv2Link?: string;
};

const Breadcrumb = ({
  currentLinkTag,
  lv1Tag,
  lv1Link,
  lv2Tag,
  lv2Link,
}: Props) => {
  const { t } = useTranslation();

  return (
    <MuiBreadcrumb aria-label="breadcrumb" className={styles.breadcrumb}>
      <Link href="/">{t('commons.home')}</Link>

      {lv1Tag && lv1Link && (
        <Link href={lv1Link} className="lv1Link">
          {lv1Tag}
        </Link>
      )}

      {lv2Tag && lv2Link && (
        <Link href={lv2Link} className="lv2Link">
          {lv2Tag}
        </Link>
      )}

      {currentLinkTag && (
        <Typography className={styles.currentLink} aria-current="page">
          {currentLinkTag}
        </Typography>
      )}
    </MuiBreadcrumb>
  );
};

export default Breadcrumb;