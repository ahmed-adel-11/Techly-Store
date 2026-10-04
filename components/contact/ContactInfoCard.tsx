import { Icon } from "@iconify/react";

interface ContactInfoCardProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const ContactInfoCard = ({
  icon,
  label,
  value,
  href,
}: ContactInfoCardProps) => {
  const content = (
    <div className="flex gap-4 ">
      <Icon icon={icon} className="mt-1 size-5 shrink-0 text-[#ff4b3e]" />

      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] font-mono text-muted-foreground">
          {label}
        </p>

        <p className="mt-3 text-sm font-medium leading-6 text-foreground">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-[4px] border border-border bg-surface p-5 transition hover:border-[#55554f]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-[4px] border border-border bg-surface p-5">
      {content}
    </div>
  );
};

export default ContactInfoCard;
