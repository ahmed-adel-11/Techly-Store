import { FAQItem } from "./FAQItem";

export type TFAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqData: TFAQItem[] = [
  {
    id: "delivery",
    question: "How long does delivery take?",
    answer:
      "Standard delivery arrives in 3–5 working days. Express orders placed before 3pm ship the same day and arrive the next working day.",
  },
  {
    id: "warranty",
    question: "What does the warranty cover?",
    answer:
      "Our warranty covers manufacturing defects and faulty components under normal use.",
  },
  {
    id: "returns",
    question: "Can I return an opened item?",
    answer:
      "Yes. Opened items can be returned as long as they meet our return conditions.",
  },
  {
    id: "international",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to selected international destinations. Shipping costs and delivery times vary by location.",
  },
];

export function FAQList() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface">
      {faqData.map((item, index) => (
        <FAQItem key={item.id} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
