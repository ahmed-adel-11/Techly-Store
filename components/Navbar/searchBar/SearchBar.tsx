"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    router.push(`/search/${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <div className="flex items-center border pl-3 gap-2 bg-background border-gray-500/30 h-[46px] rounded-md overflow-hidden w-full min-[1120px]:order-0 order-last max-[1120px]:mt-5 min-[1120px]:max-w-md">
      <button type="button" onClick={handleSearch} aria-label="Search">
        <Icon icon="ant-design:search-outlined" className="text-foreground" />
      </button>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        placeholder="Search products, brands..."
        className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-muted-foreground text-sm"
      />
    </div>
  );
};

export default SearchBar;
