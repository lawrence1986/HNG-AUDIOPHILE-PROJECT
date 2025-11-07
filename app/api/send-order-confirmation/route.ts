import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { generateOrderConfirmationHTML } from "@/lib/email/templates/orderConfirmation";

// ✅ Configure Nodemailer Transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === "true", // false for port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      orderNumber,
      customerName,
      customerEmail,
      orderDate,
      items,
      subtotal,
      shipping,
      vat,
      grandTotal,
      shippingAddress,
      shippingCity,
      shippingZipCode,
      shippingCountry,
      paymentMethod,
    } = body;

    // ✅ Basic validation
    if (!orderNumber || !customerEmail || !items || !Array.isArray(items)) {
      return NextResponse.json(
        { success: false, error: "Missing or invalid order fields." },
        { status: 400 }
      );
    }

    // ✅ Determine base URL for images
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.DEPLOYED_NETLIFY_URL ||
      process.env.VERCEL_URL ||
      "http://localhost:3000";

    const itemsWithAbsoluteUrls = items.map((item: any) => {
      let imageUrl = item.image || "";
      if (!imageUrl.startsWith("http")) {
        imageUrl = imageUrl.replace(/^\.?\//, ""); // remove ./ or /
        imageUrl = `${baseUrl}/${imageUrl}`;
      }
      return { ...item, image: imageUrl };
    });

    // ✅ Generate HTML content
    const emailHTML = generateOrderConfirmationHTML({
      orderNumber,
      customerName,
      customerEmail,
      orderDate,
      items: itemsWithAbsoluteUrls,
      subtotal,
      shipping,
      vat,
      grandTotal,
      shippingAddress,
      shippingCity,
      shippingZipCode,
      shippingCountry,
      paymentMethod,
    });

    // ✅ Send the email
    const info = await transporter.sendMail({
      from: `"Audiophile Orders" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `Order Confirmation - #${orderNumber}`,
      html: emailHTML,
    });

    console.log("✅ Email sent successfully:", info.messageId);

    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Error sending order confirmation:", error.message);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
