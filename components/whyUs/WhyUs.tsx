import Container from "../container/Container";
import Heading from "../heading/Heading";
import WhyItem from "./whyItem/WhyItem";

const whyItems = [
  {
    icon: "boxicons:check-shield",
    title: "Two-year warranty",
    description: "Every device, no registration required.",
  },
  {
    icon: "hugeicons:shipping-truck-01",
    title: "48-hour delivery",
    description: "Free on orders over $99, tracked end to end.",
  },
  {
    icon: "boxicons:rotate-ccw",
    title: "30-day returns",
    description: "Unopened or faulty, refunded in full.",
  },
  {
    icon: "keyline-icons:package-check",
    title: "Verified stock",
    description: "Sourced direct, serial-checked before dispatch.",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Heading title="Why TECHLY" />
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2  gap-4 mt-5">
        {whyItems.map((item) => (
          <WhyItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default WhyUs;
