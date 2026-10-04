"use client";
import { fetchSingleProduct } from "@/lib/features/getSingleProduct/getProductThunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductTabs } from "./ProductTabs";
import RelatedProducts from "../relatedProducts/RelatedProducts";
import { Breadcrumb } from "../breadcrumb/BreadCrumb";
import ProductDetailsSkeleton from "../skeletons/ProductDetailsSkeleton";

const ViewProduct = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const { product, loading, error } = useAppSelector(
    (state) => state.singleProduct,
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);
  if (!product || loading) {
    return <ProductDetailsSkeleton />;
  }

  if (error) {
    <p role="alert" className="text-red-600 mt-5">
      {error}
    </p>;
  }
  return (
    <div>
      <Breadcrumb
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: product.title,
          },
        ]}
      />

      <section className="grid gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr]">
        <ProductGallery images={product.images} />

        <ProductInfo product={product} />
      </section>

      <section className="flex flex-col gap-4">
        <ProductTabs description={product.description} />

        <RelatedProducts category={product.category} id={product.id} />
      </section>
    </div>
  );
};

export default ViewProduct;
