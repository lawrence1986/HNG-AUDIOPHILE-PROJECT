"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  updateQuantity: (slug: string, quantity: number) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.slug === item.slug);
      if (existing) {
        return prev.map((p) =>
          p.slug === item.slug ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) => prev.filter((p) => p.slug !== slug));
  };

  const clearCart = () => setCart([]);

  const updateQuantity = (slug: string, quantity: number) => {
    setCart((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, quantity } : p))
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
