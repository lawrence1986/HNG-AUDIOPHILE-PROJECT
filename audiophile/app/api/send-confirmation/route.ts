import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** ✅ Convert relative image paths to absolute URLs */
const fullUrl = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com"}${path}`;

export async function POST(req: Request) {
  const { email, name, orderId, items, totals } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#F1F1F1;padding:40px;">
    <div style="max-width:600px;margin:0 auto;background:white;border-radius:8px;overflow:hidden;">
      
      <!-- Header -->
      <div style="background:#000000;padding:24px;text-align:center;">
        <h1 style="color:white;text-transform:uppercase;letter-spacing:4px;font-size:20px;">Audiophile</h1>
      </div>

      <!-- Hero Icon -->
      <div style="padding:32px;text-align:center;">
        <img src="https://raw.githubusercontent.com/zainafzal88/audiophile-assets/main/icon-order-confirmation.svg" 
        width="48" height="48" style="margin-bottom:16px;" />
        <h2 style="font-size:24px;font-weight:bold;margin:0 0 8px;">Thank You for Your Order</h2>
        <p style="color:#666;margin:0;">Hi ${name}, your order has been successfully placed!</p>
      </div>

      <!-- Order Item List -->
      <div style="padding:24px;background:#FAFAFA;border-top:1px solid #ddd;border-bottom:1px solid #ddd;">
        <h3 style="font-size:16px;text-transform:uppercase;margin-bottom:16px;">Order Summary</h3>

        ${items
          .map(
            (item: any) => `
          <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
            <div style="display:flex;align-items:center;gap:12px;">
              <img src="${fullUrl(item.image)}" width="48" height="48" style="border-radius:6px;background:#eee;" />
              <div>
                <p style="font-weight:600;margin:0;text-transform:uppercase;font-size:14px;">${item.name}</p>
                <p style="color:#666;margin:0;font-size:13px;">$${item.price.toLocaleString()}</p>
              </div>
            </div>
            <span style="color:#666;font-weight:600;">x${item.quantity}</span>
          </div>
        `
          )
          .join("")}
      </div>

      <!-- Totals -->
      <div style="padding:24px;">
        <p style="display:flex;justify-content:space-between;">
          <span style="color:#666;">Subtotal:</span>
          <strong>$${totals.subtotal.toLocaleString()}</strong>
        </p>
        <p style="display:flex;justify-content:space-between;">
          <span style="color:#666;">Shipping:</span>
          <strong>$${totals.shipping.toLocaleString()}</strong>
        </p>
        <p style="display:flex;justify-content:space-between;">
          <span style="color:#666;">VAT (Included):</span>
          <strong>$${totals.vat.toLocaleString()}</strong>
        </p>
        <p style="display:flex;justify-content:space-between;margin-top:16px;font-size:18px;">
          <span style="color:#000;font-weight:bold;">Grand Total:</span>
          <strong style="color:#D87D4A;">$${totals.grandTotal.toLocaleString()}</strong>
        </p>
      </div>

      <!-- CTA -->
      <div style="text-align:center;padding:32px;">
        <a href="${process.env.NEXT_PUBLIC_BASE_URL}/orders/${orderId}"
        style="background:#D87D4A;color:white;padding:14px 28px;text-decoration:none;border-radius:6px;text-transform:uppercase;font-weight:bold;display:inline-block;">
          View Order
        </a>
      </div>

      <!-- Footer -->
      <div style="text-align:center;padding:16px;background:#000000;">
        <p style="color:white;font-size:12px;margin:0;">
          Audiophile • Premium Audio Equipment
        </p>
      </div>
      
    </div>
  </div>
  `;

  await transporter.sendMail({
    from: `"Audiophile Store" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Your Order Confirmation • #${orderId}`,
    html,
  });

  return NextResponse.json({ success: true });
}