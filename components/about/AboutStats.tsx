const stats = [
  {
    value: "180k",
    label: "Orders shipped",
  },
  {
    value: "4.8",
    label: "Average review score",
  },
  {
    value: "12",
    label: "Countries served",
  },
  {
    value: "48h",
    label: "Median delivery time",
  },
];

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 max-[430px]:grid-cols-1  overflow-hidden rounded-[4px] border border-border bg-surface lg:grid-cols-4 mb-10">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`
            p-7 sm:p-8
            ${index % 2 !== 0 ? "border-l border-border" : ""}
            ${index >= 2 ? "border-t border-border" : ""}
            max-[430px]:border-b
            max-[430px]:border-b-border
            lg:border-t-0
            lg:border-l
            lg:first:border-l-0
          `}
        >
          <p className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {stat.value}
          </p>

          <p className="mt-3 text-sm text-muted-foreground font-mono">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;
