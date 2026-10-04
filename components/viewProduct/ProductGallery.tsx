"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-2">
      <div className="relative aspect-square overflow-hidden bg-[#eeeeee]">
        <Image
          src={images[activeImage]}
          alt="Product image"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(index)}
            className={[
              "relative h-16 w-16 overflow-hidden border",
              index === activeImage ? "border-white" : "border-white/10",
            ].join(" ")}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
