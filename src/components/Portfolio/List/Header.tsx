"use client";

import { useTranslation } from 'react-i18next';
import PageTopSection from '@/components/layout/PageTopSection';
import PageTitle from '@/components/layout//PageTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';

const ListHeader = () => {
  const { t } = useTranslation();

  return (
    <PageTopSection>
      <div className='innerHeader'>
        <PageTitle title={t('Portfolio.title')} />
        <Breadcrumb currentLinkTag={t('Portfolio.title')} lv1Link='/portfolio' />
      </div>
    </PageTopSection>
  );
};

export default ListHeader;
