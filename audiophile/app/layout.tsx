import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Audiophile | Premium Audio Gear",
  description: "E-commerce website for high-end audio products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* ✅ Global header (only once here) */}
        <Header />

        {/* Main content area */}
        {children}

        {/* ✅ Global footer */}
        <Footer />
      </body>
    </html>
  );
}