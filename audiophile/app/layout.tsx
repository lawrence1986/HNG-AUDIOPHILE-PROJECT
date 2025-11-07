import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ClientProviders from "./ClientProviders";

export const metadata = {
  title: "Audiophile",
  description: "Premium audio equipment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
