import Portfolio from "@/components/Portfolio";

type PortfolioDetailPageProps = {
  params: Promise<{
    category: string;
    slug: string;
    year: string;
  }>;
};

const PortfolioDetailPage = async ({ params }: PortfolioDetailPageProps) => {
  const { category, year, slug } = await params;

  return (
    <Portfolio category={category} year={year} slug={slug}/>
  );
};

export default PortfolioDetailPage;