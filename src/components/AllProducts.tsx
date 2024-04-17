import { productData } from "@/lib/data";
import React from "react";
import { ProductCard } from "./productCard";

export const AllProducts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {productData.map(
        (item) => item.isVisible && <ProductCard key={item.id} product={item} />
      )}
    </div>
  );
};
