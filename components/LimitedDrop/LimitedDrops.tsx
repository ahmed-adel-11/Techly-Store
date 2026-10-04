import Container from "../container/Container";
import { Icon } from "@iconify/react";
const promoStats = [
  {
    value: "48h",
    text: "Free tracked delivery over $99",
  },
  {
    value: "2 yrs",
    text: "Warranty on every device sold",
  },
];

const LimitedDrop = () => {
  return (
    <Container>
      <section className="py-16">
        <div className="flex items-center bg-surface gap-5 max-lg:flex-col  max-lg:items-center">
          {/* Offer */}
          <div className="flex-2 bg-primary p-3 w-full flex flex-col items-start max-lg:items-center">
            <span className="text-sm font-mono text-background/70 uppercase ">
              Limited drop
            </span>

            <h2 className="mt-3 text-2xl text-background font-bold tracking-tight sm:text-5xl">
              30% off selected audio
            </h2>

            <p className="mt-4  text-[10px] max-lg:text-center text-background/50 sm:text-base">
              Ends Sunday. Discount applied automatically at checkout on marked
              items.
            </p>

            <a
              href="/category/headphones"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
            >
              Shop the sale
              <Icon icon={"basil:arrow-right-solid"} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex-1 flex flex-col bg-surface max-lg:pb-2">
            {promoStats.map((stat) => {
              return (
                <div key={stat.value} className="rounded-xl   ">
                  <p className="mt-5 text-3xl font-bold text-foreground font-display">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm  leading-5 text-muted-foreground">
                    {stat.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default LimitedDrop;
