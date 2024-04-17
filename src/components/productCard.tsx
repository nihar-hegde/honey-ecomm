import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AddToCartButton } from "./shared/AddToCartButton";
import { Product } from "@/lib/types";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={product.imageUrl}
          width={200}
          height={200}
          alt={product.title}
        />
        <p>{product.description}</p>
        <div className="flex flex-col gap-2 my-2">
          <p>
            <span className="font-bold">₹</span> {product.price}
          </p>
          <p>only {product.quantity} remaning</p>
        </div>
        <AddToCartButton product={product} />
      </CardContent>
    </Card>
  );
};
