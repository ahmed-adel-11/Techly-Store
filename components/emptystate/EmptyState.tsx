import Link from "next/link";
import { Icon } from "@iconify/react";

interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const EmptyState = ({
  icon,
  title,
  description,
  buttonText,
  href,
}: EmptyStateProps) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-md border border-border bg-surface px-5 py-16 text-center">
      <Icon
        icon={icon}
        className="mb-5 size-9 text-muted-foreground"
        aria-hidden="true"
      />

      <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>

      <p className="mb-7 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
        {description}
      </p>

      <Link
        href={href}
        className="  rounded-lg bg-primary py-2.5 px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 cursor-pointer"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default EmptyState;
