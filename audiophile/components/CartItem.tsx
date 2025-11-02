"use client";
import Image from "next/image";
import { useCart } from "./CartContext";

interface CartItemProps {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartItem({
  slug,
  name,
  price,
  quantity,
  image,
}: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="rounded-lg bg-gray-100"
        />
        <div>
          <p className="text-sm font-bold text-black">{name}</p>
          <p className="text-sm text-gray-500">${price.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(slug, Math.max(1, quantity - 1))}
          className="w-6 h-6 text-gray-400 hover:text-black"
        >
          -
        </button>
        <span className="w-6 text-center text-sm font-bold">{quantity}</span>
        <button
          onClick={() => updateQuantity(slug, quantity + 1)}
          className="w-6 h-6 text-gray-400 hover:text-black"
        >
          +
        </button>
      </div>
    </div>
  );
}
