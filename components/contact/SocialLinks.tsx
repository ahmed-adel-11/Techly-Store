const socialLinks = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "YouTube",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "X",
    href: "#",
  },
];

const SocialLinks = () => {
  return (
    <div className="rounded-[4px] border-border bg-surface p-5">
      <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
        Social
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="rounded-[4px] border border-border px-3 py-2 text-sm text-muted-foreground transition hover:border-[#55554f]"
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
