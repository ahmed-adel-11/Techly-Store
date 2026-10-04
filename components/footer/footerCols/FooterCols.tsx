import Link from "next/link";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "Smartphones", href: "/category/smartphones" },
      { label: "Laptops", href: "/category/laptops" },
      { label: "Tablets", href: "/category/tablets" },
      { label: "Headphones", href: "/category/headphones" },
      { label: "Smart Watches", href: "/category/smart-watches" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Gaming", href: "/category/gaming" },
      { label: "Monitors", href: "/category/monitors" },
      { label: "Accessories", href: "/category/accessories" },
      { label: "Cameras", href: "/category/cameras" },
      { label: "Networking", href: "/category/networking" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Track an order", href: "/orders" },
      { label: "Shipping & returns", href: "/contact" },
      { label: "Warranty", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Why Techly", href: "/about" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "All products", href: "/shop" },
    ],
  },
];

const FooterCols = () => {
  return (
    <div className="grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h3 className="text-muted-foreground font-mono font-[10px] uppercase tracking-tight">
            {section.title}
          </h3>

          <ul className="flex flex-col gap-3 mt-3">
            {section.links.map((link) => (
              <li
                key={link.label}
                className="text-[15px] transition-all duration-150 hover:underline cursor-pointer text-foreground"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterCols;
