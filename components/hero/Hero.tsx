import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "../container/Container";
import Image from "next/image";
import AnimationContainer from "../animationContainer/AnimationContainer";

const Hero = () => {
  return (
    <Container>
      <section className="relative isolate mb-10 overflow-hidden rounded-lg border border-border bg-surface">
        <AnimationContainer>
          <div className="grid min-h-[390px] items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-12 max-[1100px]:flex max-[1100px]:justify-center max-[1100px]:text-center">
            {/* Hero content */}
            <div className="relative z-10 max-w-xl max-[1100px]:w-full">
              <div className="mb-5 inline-flex items-center gap-2 rounded-sm border border-[#343430] bg-[#111110] px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-red-500" />
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#b8b8b1]">
                  Your tech destination
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] ">
                Upgrade your
                <br />
                world with <span className="text-red-500">TECHLY.</span>
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#9c9c96] sm:text-base max-[1100px]:mx-auto">
                Discover the latest tech, essential accessories, and smart
                devices. Everything you need, all in one place.
              </p>

              <div className="mt-8 flex flex-wrap items-center max-[1100px]:justify-center gap-3">
                <Link
                  href="/shop"
                  className=" inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90  max-[500px]:w-full  max-[500px]:justify-center"
                >
                  Explore products
                  <Icon icon="solar:arrow-right-linear" className="size-4" />
                </Link>

                <Link
                  href="/shop"
                  className="px-4 rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 cursor-pointer max-[500px]:w-full"
                >
                  Browse categories
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-9 flex flex-wrap items-center max-[1100px]:justify-center gap-x-6 gap-y-3 border-t border-[#2e2e2b] pt-5">
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:shield-check-linear"
                    className="size-4 text-red-500"
                  />
                  <span className="text-xs text-muted-foreground">
                    2-year warranty
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:delivery-linear"
                    className="size-4 text-red-500"
                  />
                  <span className="text-xs text-muted-foreground">
                    48-hour delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex w-full min-w-0 items-center justify-center max-[1100px]:hidden">
              <Image
                src="/assets/imgs/electronics-removebg-preview.png"
                alt="Collection of laptops, smartphones, headphones, smartwatches and electronics"
                width={1536}
                height={1024}
                priority
                className="h-auto w-full max-h-[420px] object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </AnimationContainer>
      </section>
    </Container>
  );
};

export default Hero;
