import Container from "@/components/container/Container";
import Filters from "../../components/filters/Filters";
import FilterdProducts from "@/components/filters/FilterdProducts";


const ShopPage = () => {
  return (
    <Container>
      <div className="flex gap-3 max-[835px]:flex-col">
        <div className="flex-1">
          <Filters />
        </div>
        <div className="flex-3">
          <FilterdProducts />
        </div>
      </div>
    </Container>
  );
};

export default ShopPage;
