import Portfolio from "@/components/Portfolio";
import { categoryListContent } from '@/data/portfolio';

export const generateStaticParams = () => {
  return categoryListContent.map((item) => ({
    category: item.category.toLowerCase(),
    year: String(item.year)
  }));
};

type PortfolioYearPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

const PortfolioYearPage = async ({ params }: PortfolioYearPageProps) => {
  const { category, year } = await params;

  return (
    <Portfolio category={category} year={year} />
  );
};

export default PortfolioYearPage;