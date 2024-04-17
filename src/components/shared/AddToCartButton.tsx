"use client";
import React from "react";
import { Button } from "../ui/button";
import { Product } from "@/lib/types";
import { useCart } from "@/hooks/use-cart";

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  return (
    <Button
      onClick={() => {
        addItem(product);
      }}
    >
      Add To Cart
    </Button>
  );
};
