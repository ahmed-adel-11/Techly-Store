"use client";

import { useState } from "react";

type Tab = "description" | "specifications" | "reviews";

interface ProductTabsProps {
  description: string;
}

export const ProductTabs = ({ description }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("description");

  return (
    <section className="mt-10 border-t border-white/10">
      <div className="flex gap-8">
        <TabButton
          active={activeTab === "description"}
          onClick={() => setActiveTab("description")}
        >
          Description
        </TabButton>

        <TabButton
          active={activeTab === "specifications"}
          onClick={() => setActiveTab("specifications")}
        >
          Specifications
        </TabButton>

        <TabButton
          active={activeTab === "reviews"}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </TabButton>
      </div>

      <div className="max-w-2xl py-5">
        {activeTab === "description" && (
          <p className="text-xs leading-5 text-white/50">{description}</p>
        )}

        {activeTab === "specifications" && (
          <div className="text-xs text-white/50">
            Specifications coming soon.
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-xs text-white/50">Reviews coming soon.</div>
        )}
      </div>
    </section>
  );
};

interface TabButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const TabButton = ({ active, children, onClick }: TabButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "border-b-2 py-3 font-mono text-[9px] uppercase tracking-wide",
        active
          ? "border-red-500 text-white"
          : "border-transparent text-white/40 hover:text-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
};
