import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/app/context/CartContext";

export const metadata = {
  title: "Audiophile",
  description: "Premium audio equipment e-commerce site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Wrap everything that uses useCart() in CartProvider */}
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
