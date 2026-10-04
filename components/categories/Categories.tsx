import Link from "next/link";
import CommonCard from "../CommonCard/CommonCard";
import Container from "../container/Container";
import Heading from "../heading/Heading";
import AnimationContainer from "../animationContainer/AnimationContainer";

const cats = [
  { color: "bg-blue-500", category: "laptops" },
  { color: "bg-red-500", category: "mens-watches" },
  { color: "bg-yellow-400", category: "mobile-accessories" },
  { color: "bg-white", category: "smartphones" },
  { color: "bg-blue-500", category: "tablets" },
  { color: "bg-yellow-400", category: "womens-watches" },
];

const Categories = () => {
  return (
    <Container>
      <Heading title="categories" subTitle="6 Types" />
      <AnimationContainer>
        <div className="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 mt-5">
          {cats.map((cat) => {
            return (
              <Link key={cat.category} href={`/category/${cat.category}`}>
                <CommonCard
                  bgColor={cat.color}
                  category={cat.category}
                  spaces
                />
              </Link>
            );
          })}
        </div>
      </AnimationContainer>
    </Container>
  );
};

export default Categories;
