"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CartItem({ id, name, price, quantity, image }: CartItemProps) {
  const { removeFromCart, addToCart } = useCart();

  // Handlers for quantity buttons
  const increaseQty = () => addToCart({ id, name, price, image, quantity: 1 });
  const decreaseQty = () => {
    if (quantity > 1) {
      addToCart({ id, name, price, image, quantity: -1 }); // Reduce quantity
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="flex items-center justify-between bg-[#F1F1F1] p-3 rounded-md">
      {/* Left - Image and Details */}
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-md bg-white object-cover"
        />
        <div>
          <p className="font-semibold text-[13px] uppercase">{name}</p>
          <p className="text-gray-500 text-sm">$ {price.toLocaleString()}</p>
        </div>
      </div>

      {/* Right - Quantity Controls */}
      <div className="flex items-center bg-[#E9E9E9] rounded-md">
        <button
          onClick={decreaseQty}
          className="px-3 py-1 text-gray-600 hover:text-[#D87D4A] font-bold"
        >
          −
        </button>
        <span className="px-3 py-1 text-sm font-semibold">{quantity}</span>
        <button
          onClick={increaseQty}
          className="px-3 py-1 text-gray-600 hover:text-[#D87D4A] font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}
