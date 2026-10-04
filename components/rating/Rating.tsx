import { Icon } from "@iconify/react";
interface IRatingProps {
  rate: number;
}
const Rating = ({ rate }: IRatingProps) => {
  const rating = Math.floor(rate);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star, i) => {
        return rating >= star ? (
          <Icon
            key={i}
            icon={"ant-design:star-filled"}
            className="text-yellow-400"
          />
        ) : (
          <Icon
            key={i}
            icon={"ant-design:star-outlined"}
            className="text-yellow-400"
          />
        );
      })}
      <span className="text-muted-foreground text-sm">{rate}</span>
    </div>
  );
};

export default Rating;
