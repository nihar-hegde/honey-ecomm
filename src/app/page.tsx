import { AllProducts } from "@/components/AllProducts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold ">Products</h1>
      <AllProducts />
    </main>
  );
}
