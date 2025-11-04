"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const router = useRouter();
  const { cart, total, clearCart } = useCart();

  // ✅ Calculations moved here (no calc file needed)
  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  // ...
}
