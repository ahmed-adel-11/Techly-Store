import { Breadcrumb } from "@/components/breadcrumb/BreadCrumb";
import Container from "@/components/container/Container";
import Heading from "@/components/heading/Heading";
import ProductsByCat from "@/components/productsByCat/ProductsByCat";

interface ICatProps {
  params: Promise<{ category: string }>;
}
const CategoryPage = async ({ params }: ICatProps) => {
  const { category } = await params;

  return (
    <Container>
      <Breadcrumb
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: category,
          },
        ]}
      />
      <ProductsByCat category={category} />
    </Container>
  );
};

export default CategoryPage;
