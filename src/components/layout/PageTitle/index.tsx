"use client";

import styles from './PageTitle.module.scss';

type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return <h1 className={styles.pageTitle}>{title}</h1>;
};

export default PageTitle;