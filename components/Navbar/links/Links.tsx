import Link from "next/link";

const links = [
  { name: "shop", path: "/shop" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];
const Links = () => {
  return (
    <div className="flex items-center gap-3 mt-2 max-[700px]:hidden">
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

export default Links;
