"use client";

import { CartProvider } from "@/app/components/CartContext";

import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <CartProvider>{children}</CartProvider>
    </ConvexProvider>
  );
}
