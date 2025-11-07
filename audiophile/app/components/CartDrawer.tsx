"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, total, removeFromCart, clearCart } = useCart();

  return (
    <div className="absolute top-20 right-8 w-80 bg-white shadow-xl rounded-lg p-6 z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="uppercase font-bold tracking-widest text-lg">Cart</h2>
        <button className="text-gray-500 text-sm" onClick={clearCart}>
          Remove all
        </button>
      </div>

      {cart.length === 0 && (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      )}

      <div className="space-y-5 max-h-60 overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="rounded-lg bg-gray-200 object-cover"
              />
              <div>
                <p className="uppercase font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">$ {item.price}</p>
              </div>
            </div>

            <p className="font-bold text-sm">x{item.quantity}</p>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <div className="flex justify-between mt-6">
            <span className="text-gray-600">Total</span>
            <span className="font-bold">$ {total}</span>
          </div>

          <Link
            href="/checkout"
            className="block bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-center uppercase tracking-widest py-3 rounded-md mt-6"
          >
            Checkout
          </Link>
        </>
      )}
    </div>
  );
}
