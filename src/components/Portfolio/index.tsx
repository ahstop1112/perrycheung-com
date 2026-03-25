"use client";

import MainLayout from '@/components/layout/MainLayout';
//  Child Page Components
import List from './List';
import Content from "./Content";

type PortfolioProps = {
    category?: string | `all`;
    year?: string;
    slug?: string;
}

const Portfolio = ({ category = "all", year, slug }: PortfolioProps) => {
  console.log(category, year, slug);
  return (
    <MainLayout>
        {category && year && slug ? <Content slug={slug} /> : <List category={category} />}
    </MainLayout>
  );
};

export default Portfolio;