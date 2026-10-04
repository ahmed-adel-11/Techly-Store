import { Icon } from "@iconify/react";

const benefits = [
  {
    title: "Free 48-hour delivery",
    description: "On orders over $99. Dispatched same day before 3pm.",
    icon: "hugeicons:shipping-truck-01",
  },
  {
    title: "30-day returns",
    description: "Free collection if the item is faulty or unopened.",
    icon: "boxicons:rotate-ccw",
  },
  {
    title: "2-year warranty",
    description: "Handled in-house, no manufacturer runaround.",
    icon: "boxicons:check-shield",
  },
];

export const ProductBenefits = () => {
  return (
    <div className=" overflow-hidden border border-border bg-surface">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex gap-3 border-b border-border px-3 py-3 last:border-b-0"
        >
          <Icon icon={benefit.icon} className="text-muted-foreground" />

          <div>
            <h3 className="text-xs font-semibold text-foreground">
              {benefit.title}
            </h3>

            <p className="mt-0.5 font-mono text-[9px] text-white/40">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
