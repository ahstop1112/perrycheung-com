"use client";

import MainLayout from '@/components/layout/MainLayout';
import PortfolioProvider from '@/providers/Portfolio';
import { categoryListContent } from '@/data/portfolio';
//  Child Page Components
import List from './List';
import Content from "./Content";

type PortfolioProps = {
    category: string;
    year: string;
    slug: string | ``;
}

const Portfolio = ({ category, year, slug }: PortfolioProps) => {
  console.log(category);
  return (
    <MainLayout>
        {category && year && slug ? <Content slug={slug} /> : <List category={category} year={year} />}
    </MainLayout>
  );
};

export default Portfolio;