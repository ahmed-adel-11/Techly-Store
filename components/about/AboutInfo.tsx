const aboutInfo = [
  {
    label: "Mission",
    text: "Make buying technology feel like buying a tool — clear specifications, clear pricing, and no pressure to upgrade before you need to.",
  },
  {
    label: "How we work",
    text: "We buy direct, hold real stock, and publish the same price to everyone. No hidden bundles, no fake countdowns, no listings we cannot ship today.",
  },
];

const AboutInfo = () => {
  return (
    <div className="grid grid-cols-1 divide-y divide-border overflow-hidden rounded-[4px] border border-border bg-surface lg:grid-cols-2 lg:divide-x lg:divide-y-0 my-10">
      {aboutInfo.map((item) => (
        <div key={item.label} className="p-7 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {item.label}
          </p>

          <p className="mt-6  leading-7 text-foreground text-sm">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutInfo;
