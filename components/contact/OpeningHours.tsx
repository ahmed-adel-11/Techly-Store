const OpeningHours = () => {
  return (
    <div className="rounded-[4px] border-border bg-surface p-5">
      <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground font-mono">
        Opening hours
      </p>

      <div className="mt-4 text-sm">
        <p className="font-medium text-foreground">Mon–Fri, 09:00–18:00 GMT</p>

        <p className="mt-1 text-muted-foreground font-mono">
          Saturday, 10:00–14:00 GMT
        </p>
      </div>
    </div>
  );
};

export default OpeningHours;
