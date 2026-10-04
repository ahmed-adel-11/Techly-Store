import Container from "@/components/container/Container";
import SearchingProducts from "@/components/seachingProducts/SearchingProducts";

interface ISearchProps {
  params: Promise<{ q: string }>;
}

const Searchpage = async ({ params }: ISearchProps) => {
  const { q } = await params;

  return (
    <Container>
      <SearchingProducts q={q} />
    </Container>
  );
};

export default Searchpage;