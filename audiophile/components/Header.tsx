"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Cart from "@/components/Cart";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount } = useCart(); // ✅ use count directly

  return (
    <header className="bg-[#000000] text-white py-6 px-8 flex justify-between items-center relative z-50 border-b border-gray-700">
      {/* Left - Logo */}
      <Link href="/" className="font-bold text-lg uppercase tracking-wide">
        audiophile
      </Link>

      {/* Center - Navigation */}
      <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
        <Link href="/" className="hover:text-[#D87D4A] transition">Home</Link>
        <Link href="/category/headphones" className="hover:text-[#D87D4A] transition">Headphones</Link>
        <Link href="/category/speakers" className="hover:text-[#D87D4A] transition">Speakers</Link>
        <Link href="/category/earphones" className="hover:text-[#D87D4A] transition">Earphones</Link>
      </nav>

      {/* Right - Cart Icon with Counter */}
      <button
        onClick={() => setCartOpen(!cartOpen)}
        aria-label="Cart"
        className="relative"
      >
        <Image
          src="/assets/cart/icon-cart.png"
          alt="Cart"
          width={24}
          height={24}
          className="hover:opacity-80 transition"
        />

        {/* ✅ Live Counter Badge */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-[10px] font-bold rounded-full px-[6px] py-[2px]">
            {cartCount}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      {cartOpen && (
        <div className="absolute top-20 right-8 z-50">
          <Cart />
        </div>
      )}
    </header>
  );
}
