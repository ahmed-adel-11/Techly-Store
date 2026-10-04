import Link from "next/link";
import Theme from "../theme/Theme";

const links = [
  { name: "shop", path: "/shop" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

interface IMenuProps {
  isOpen: boolean;
}
const MobileMenu = ({ isOpen }: IMenuProps) => {
  return (
    <div
      id="mobile-menu"
      className={`absolute z-99 top-[120px] left-0 w-full bg-surface shadow-md py-4 ${isOpen ? "flex" : "hidden"} flex-col items-start gap-5 px-5 text-sm border-b-2 border-border `}
    >
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.path}
            className="uppercase font-mono text-muted-foreground transition-all duration-150 hover:text-foreground text-[14px]"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenu;
