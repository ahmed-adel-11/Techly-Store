import AboutHero from "@/components/about/AboutHero";
import AboutInfo from "@/components/about/AboutInfo";
import AboutStats from "@/components/about/AboutStats";
import BrandsWeCarry from "@/components/brandsWeCarry/BrandsWeCarry";
import Container from "@/components/container/Container";
import Newsletter from "@/components/newsLetter/NewsLetter";
import WhyUs from "@/components/whyUs/WhyUs";

const AboutPage = () => {
  return (
    <Container>
      <AboutHero />
      <AboutInfo />
      <AboutStats />
      <WhyUs />
      <BrandsWeCarry />
      <Newsletter />
    </Container>
  );
};

export default AboutPage;
