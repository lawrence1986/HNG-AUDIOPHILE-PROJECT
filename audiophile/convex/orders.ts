// convex/orders.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    customer: {
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    },
    shipping: {
      address: v.string(),
      city: v.string(),
      country: v.string(),
      zip: v.string(),
    },
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    totals: {
      subtotal: v.number(),
      shipping: v.number(),
      tax: v.number(),
      grandTotal: v.number(),
    },
    status: v.string(),
  },
  handler: async (ctx, { customer, shipping, items, totals, status }) => {
    const orderId = await ctx.db.insert("orders", {
      customer,
      shipping,
      items,
      totals,
      status,
      createdAt: Date.now(),
    });
    return { orderId };
  },
});
