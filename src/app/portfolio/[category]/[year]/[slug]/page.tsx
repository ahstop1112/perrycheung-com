import Portfolio from "@/components/Portfolio";
import { categoryListContent } from "@/data/portfolio";

export const generateStaticParams = () => {
  return categoryListContent
    .filter((item) => item.category && item.year && item.slug)
    .map((item) => ({
      category: item.category.toLowerCase(),
      year: String(item.year),
      slug: item.slug,
    }));
};

type PortfolioDetailPageProps = {
  params: {
    category: string;
    year: string;
    slug: string;
  };
};

const PortfolioDetailPage = async ({ params }: PortfolioDetailPageProps) => {
  const { category, year, slug } = await params;

  console.log()

  return <Portfolio category={category} year={year} slug={slug} />;
};

export default PortfolioDetailPage;