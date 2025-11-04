"use client";

import { useState } from "react";
import { useCart } from "@/app/components/CartContext";
import { CartProvider } from "@/app/components/CartContext";


interface AddToCartButtonProps {
  product: {
    slug: string;
    name: string;
    price: number;
    image?: { desktop?: string };
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      id: product.slug,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image?.desktop || "/assets/shared/desktop/image-placeholder.jpg",
    });

    setQuantity(1);
  };

  return (
    <div className="flex items-center gap-6 mt-10">
      <div className="flex items-center bg-[#F1F1F1] rounded-md">
        <button onClick={decreaseQty} className="px-4 py-3 font-bold text-gray-600 hover:text-[#D87D4A] transition">−</button>
        <span className="px-5 py-3 text-sm font-semibold">{quantity}</span>
        <button onClick={increaseQty} className="px-4 py-3 font-bold text-gray-600 hover:text-[#D87D4A] transition">+</button>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase px-8 py-3 tracking-widest text-sm font-semibold rounded-md transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
