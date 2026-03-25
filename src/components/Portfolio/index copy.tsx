"use client";
//  General JS Library importation
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from 'components/MainLayout';
import PortfolioProvider from '@/providers/Portfolio';
import { categoryListContent } from '@/data/portfolio';
//  Child Page Components
import List from './List';
import Content from './Content';

const Portfolio = () => {
  const { tag, year, slug } = useParams();
  const profo = categoryListContent.filter((item) => item.slug === slug)[0];

  const initialPortfolioState = {
    isReadWrite: true,
    actionTypes: [],
    searchType: 'advanced',
    searchInputs: null,
    listColumns: null,
    searchResult: [],
    PortfolioById: [],
    layoutGrid: 4,
    isLoading: true,
    pageSorts: '-processStartDatetime',
    sortOrder: 'desc',
    canSort: true,
    totalCount: 0,
    pageIndex: 0,
    pageSize: 20,
    apiData: profo,
  };

  return (
    <PortfolioProvider initState={initialPortfolioState}>
      <MainLayout>{tag && year && slug ? <Content slug={slug}/> : <List tag={tag} year={year}/>}</MainLayout>
    </PortfolioProvider>
  );
};

export default Portfolio;