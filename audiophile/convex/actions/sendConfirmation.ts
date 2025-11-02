"use node";
import { action } from "./_generated/server";
import nodemailer from "nodemailer";

export const sendConfirmation = action({
  args: {
    email: v.string(),
    orderId: v.string(),
    items: v.array(
      v.object({
        name: v.string(),
        quantity: v.number(),
        price: v.number(),
      })
    ),
    total: v.number(),
  },
  handler: async (ctx, { email, orderId, items, total }) => {
    const transporter = nodemailer.createTransport({
      service: "YourEmailService", // e.g. Gmail, SendGrid
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const itemsHtml = items.map(i => `<li>${i.name} × ${i.quantity} — $${i.price}</li>`).join("");

    await transporter.sendMail({
      from: `"Audiophile" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your order ${orderId} confirmation`,
      html: `
        <h1>Hello!</h1>
        <p>Your order ID is <strong>${orderId}</strong>.</p>
        <ul>${itemsHtml}</ul>
        <p>Total: $${total}</p>
      `,
    });

    return { success: true };
  },
});
