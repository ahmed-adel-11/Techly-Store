import Container from "../container/Container";

const Newsletter = () => {
  return (
    <Container>
      <section className="py-5 bg-surface border-2 border-border">
        <div className="flex items-center justify-between max-[825px]:flex-col max-[825px]:text-center px-4 ">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Drop alerts, no noise
            </h2>
            <p className=" mt-3  text-muted-foreground font-mono text-sm">
              One email a week: new arrivals, restocks and genuine price drops.
            </p>
          </div>

          <form className=" mt-6 flex  flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@gmail.com"
              className="text-foreground  rounded-lg placeholder:text-muted-foreground font-mono border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary"
            />

            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default Newsletter;
