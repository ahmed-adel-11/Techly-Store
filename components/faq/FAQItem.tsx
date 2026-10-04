"use client";

import { useState } from "react";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type FAQItemProps = {
  item: FAQItem;
  defaultOpen?: boolean;
};

export function FAQItem({ item, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left"
      >
        <span className="text-base font-semibold text-primary">
          {item.question}
        </span>

        <span
          className="shrink-0 text-lg font-light text-muted-foreground "
          aria-hidden="true"
        >
          {isOpen ? "×" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="max-w-4xl text-[16px] leading-6 text-muted-foreground font-mono">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
