interface IHeadingProps {
  title: string;
  subTitle?: string;
}

const Heading = ({ title, subTitle }: IHeadingProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-foreground text-2xl capitalize font-mono">{title}</h1>
      <span className="text-muted-foreground">{subTitle}</span>
    </div>
  );
};

export default Heading;
