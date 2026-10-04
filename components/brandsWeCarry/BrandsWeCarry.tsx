import AnimationContainer from "../animationContainer/AnimationContainer";
import CommonCard from "../CommonCard/CommonCard";
import Container from "../container/Container";
import Heading from "../heading/Heading";

const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Microsoft",
  "Dell",
  "Lenovo",
  "ASUS",
  "NVIDIA",
];
const BrandsWeCarry = () => {
  return (
    <Container>
      <Heading title="Brands we carry" subTitle="8 partners" />
      <AnimationContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-5 text-center capitalize text-[20px]">
          {brands.map((brand) => {
            return <CommonCard key={brand} category={brand} spaces={false} />;
          })}
        </div>
      </AnimationContainer>
    </Container>
  );
};

export default BrandsWeCarry;
