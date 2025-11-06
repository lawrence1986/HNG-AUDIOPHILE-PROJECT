// import { Resend } from "resend";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { generateOrderConfirmationHTML } from "@/lib/email/templates/orderConfirmation";


// NODEMAILER DEPLOY
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
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
      shippingCity, // true for 465, false for other ports
      shippingZipCode,
      shippingCountry,
      paymentMethod,
    } = body;

    // Validate required fields
    if (!orderNumber || !customerEmail || !items || items.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert relative image URLs to absolute URLs
    const baseUrl =
      process.env.DEPLOYED_NETLIFY_URL ||
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.VERCEL_URL ||
      "http://localhost:3000";

    const itemsWithAbsoluteUrls = items.map((item: any) => {
      let imageUrl = item.image;

      // If image is already absolute, use as-is
      if (imageUrl.startsWith("http")) {
        return { ...item, image: imageUrl };
      }

      // Remove leading ./ or / if present
      imageUrl = imageUrl.replace(/^\.?\//, "");

      // Construct absolute URL
      return {
        ...item,
        image: `${baseUrl}/${imageUrl}`,
      };
    });

    // Generate HTML email
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

    

    // NODEMAILER IMPLEMENTATION
    try {
      const info = await transporter.sendMail({
        from: `"Audiophile" <${process.env.EMAIL_USER}>`,
        to: customerEmail,
        subject: `Order Confirmation - ${orderNumber}`,
        html: emailHTML,
      });

      console.log("Email sent successfully:", info.messageId);
      return NextResponse.json(
        { success: true, messageId: info.messageId },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error("Error sending email:", emailError);
      return NextResponse.json(
        { error: "Failed to send email", details: emailError.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in send-order-confirmation API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
