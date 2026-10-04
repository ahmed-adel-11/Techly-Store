import { Icon } from "@iconify/react";

interface WhyItemProps {
  icon: string;
  title: string;
  description: string;
}

export default function WhyItem({ icon, title, description }: WhyItemProps) {
  return (
    <div className="bg-surface p-5 border-2 border-border">
      <Icon icon={icon} className="text-red-500" />

      <h3 className="mb-2 mt-1 text-lg font-semibold text-foreground font-display">
        {title}
      </h3>

      <p className="text-xs text-muted-foreground font-mono">{description}</p>
    </div>
  );
}
