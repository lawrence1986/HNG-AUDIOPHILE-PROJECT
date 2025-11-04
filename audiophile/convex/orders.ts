import { mutation } from "./_generated/server";

export const createOrder = mutation(
  async ({ db }, order: {
    customer: {
      name: string;
      email: string;
      phone: string;
    };
    shipping: {
      address: string;
      city: string;
      country: string;
      zip: string;
    };
    items: {
      id: string;
      name: string;
      price: number;
      quantity: number;
      image: string;
    }[];
    totals: {
      subtotal: number;
      shipping: number;
      vat: number;
      grandTotal: number;
    };
    status: "pending" | "paid";
    createdAt: number;
  }) => {
    return await db.insert("orders", order);
  }
);
