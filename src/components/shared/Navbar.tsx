import Link from "next/link";
import React from "react";
import Cart from "../Cart";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed z-50 w-full py-4 gap-5  shadow-md sm:px-24">
      <Link href={"/"} className="flex items-center gap-1 ">
        <p className="font-bold text-2xl ">
          Orkit <span className="text-primary-500">Honey and Spices</span>
        </p>
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <Cart />
        </div>
      </div>
    </nav>
  );
};
