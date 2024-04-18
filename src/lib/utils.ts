import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function formatPrice(
//   price: number | string,
//   options: {
//     currency?: "INR";
//     notation?: Intl.NumberFormatOptions["notation"];
//   } = {},
// ) {
//   const { currency = "INR", notation = "compact" } = options;
//
//   const numericPrice = typeof price === "string" ? parseFloat(price) : price;
//
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency,
//     notation,
//     maximumFractionDigits: 2,
//   }).format(numericPrice);
//
// }

export function formatPrice(
  price: number | string,
  options: {
    currency?: "INR";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {},
) {
  const { currency = "INR", notation = "standard" } = options; // 'standard' as default

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  // Logic for displaying full number till 10 lakhs
  const lakhThreshold = 100000;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation: numericPrice < lakhThreshold ? "standard" : "compact", // Conditional notation
    maximumFractionDigits: 2,
  });

  return formatter.format(numericPrice);
}
