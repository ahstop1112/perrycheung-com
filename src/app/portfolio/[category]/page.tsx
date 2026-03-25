import Portfolio from "@/components/Portfolio";
import { categoryListContent } from '@/data/portfolio';

export const generateStaticParams = () => {
  return categoryListContent.map((item) => ({
    category: item.category.toLowerCase()
  }));
};

type PortfolioCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const PortfolioCategoryPage = async ({ params }: PortfolioCategoryPageProps) => {
  const { category } = await params;

  return (
    <Portfolio category={category} />
  );
};

export default PortfolioCategoryPage;