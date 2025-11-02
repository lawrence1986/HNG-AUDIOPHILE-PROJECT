"use client";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import Link from "next/link";

export default function Cart() {
  const { cart, total, clearCart } = useCart();

  if (cart.length === 0) return null;

  return (
    <div className="absolute top-20 right-6 w-96 bg-white rounded-lg shadow-lg p-6 z-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg">
          CART ({cart.length})
        </h3>
        <button
          onClick={clearCart}
          className="text-sm text-gray-400 hover:text-black"
        >
          Remove all
        </button>
      </div>

      <div className="space-y-4 max-h-60 overflow-y-auto">
        {cart.map((item) => (
          <CartItem key={item.slug} {...item} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 mb-6">
        <p className="text-gray-500 uppercase text-sm">Total</p>
        <p className="font-bold text-lg">${total.toLocaleString()}</p>
      </div>

      <Link href="/checkout">
        <button className="w-full bg-[#D87D4A] text-white font-bold py-3 rounded-md hover:bg-[#fbaf85]">
          CHECKOUT
        </button>
      </Link>
    </div>
  );
}
