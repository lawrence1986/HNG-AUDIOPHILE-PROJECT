import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";

export const metadata = {
  title: "Audiophile",
  description: "Audiophile e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
