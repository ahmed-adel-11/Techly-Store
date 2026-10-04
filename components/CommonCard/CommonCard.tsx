interface ICatCard {
  bgColor?: string;
  category: string;
  spaces: boolean;
}
const CommonCard = ({ bgColor, category, spaces }: ICatCard) => {
  return (
    <div
      className={`border-2 border-border bg-surface ${spaces ? "px-3 py-2" : "flex items-center justify-center py-2"} cursor-pointer transition-all duration-150 hover:bg-muted`}
    >
      <span className={`w-4 h-4 ${bgColor} block`}></span>
      <span className="font-mono text-foreground mt-2 block capitalize">
        {category}
      </span>
    </div>
  );
};

export default CommonCard;
