"use client";
import BestSellers from "@/components/bestSellers/BestSellers";
import BrandsWeCarry from "@/components/brandsWeCarry/BrandsWeCarry";
import Categories from "@/components/categories/Categories";
import Hero from "@/components/hero/Hero";
import LimitedDrop from "@/components/LimitedDrop/LimitedDrops";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import Newsletter from "@/components/newsLetter/NewsLetter";
import WhyUs from "@/components/whyUs/WhyUs";
import { fetchTechProducts } from "@/lib/features/productsSlice/productsThunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchTechProducts());
  }, [dispatch]);
  return (
    <div>
      <Hero />
      <Categories />
      <BestSellers products={items} loading={loading} error={error} />
      <NewArrivals products={items} loading={loading} error={error} />
      <LimitedDrop />
      <BrandsWeCarry />
      <WhyUs />
      <Newsletter />
    </div>
  );
}
