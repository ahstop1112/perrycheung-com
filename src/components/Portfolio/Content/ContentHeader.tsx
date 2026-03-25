"use client";

import { useTranslation } from 'react-i18next';
import PageTopSection from '@/components/layout/PageTopSection';
import PageTitle from '@/components/layout/PageTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';

type ContentHeaderProps = {
  title: string,
  category: string
}

const ContentHeader = ({ title, category }: ContentHeaderProps) => {
  const { t } = useTranslation();

  return (
    <PageTopSection>
      <div className='innerHeader'>
        <PageTitle title={`${category} - ${title}`} />
        <Breadcrumb
          currentLinkTag={title}
          lv1Tag={t('Portfolio.title')}
          lv1Link='/portfolio'
          lv2Tag={category}
          lv2Link={`/portfolio/${category.toLowerCase()}`}
        />
      </div>
    </PageTopSection>
  );
};

export default ContentHeader;
