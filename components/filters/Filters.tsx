import React from "react";
import { FiltersHeader } from "./FiltersHeader";
import { CategoryFilter } from "./CategoryFilter";
import { BrandFilter } from "./BrandFilter";
import { PriceFilter } from "./PriceFilter";

const cats = [
  "laptops",
  "mens-watches",
  "mobile-accessories",
  "smartphones",
  "tablets",
  "womens-watches",
];

const brands = [
  "Apple",
  "Asus",
  "Huawei",
  "Lenovo",
  "Dell",
  "Fashion Timepieces",
  "Longines",
  "Rolex",
  "Amazon",
  "Beats",
  "TechGear",
  "GadgetMaster",
  "SnapTech",
  "ProVision",
  "Oppo",
  "Realme",
  "Samsung",
  "Vivo",
  "IWC",
  "Fashion Gold",
  "Fashion Co.",
];

const Filters = () => {
  return (
    <div className="bg-surface">
      <FiltersHeader />
      <CategoryFilter categories={cats} />
      <BrandFilter brands={brands} />
      <PriceFilter min={10} max={2500} />
    </div>
  );
};

export default Filters;
