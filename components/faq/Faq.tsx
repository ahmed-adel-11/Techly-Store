import { FAQList } from "./FAQList";

export function FAQSection() {
  return (
    <div className="mt-10">
      <h1 className="mb-6 text-[26px] font-semibold tracking-tight text-foreground">
        Frequently asked
      </h1>

      <FAQList />
    </div>
  );
}
