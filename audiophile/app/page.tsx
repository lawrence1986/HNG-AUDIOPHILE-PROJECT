import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "../lib/products";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand text-white px-8 py-24 md:py-40">
        <Image
          src="/assets/home/desktop/image-hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover opacity-40 -z-10"
        />
        <div className="max-w-lg z-10 relative">
          <p className="uppercase tracking-widest text-gray-300 mb-4">New Product</p>
          <h1 className="text-5xl font-bold mb-6">XX99 Mark II Headphones</h1>
          <p className="text-gray-200 mb-6">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Link href="/products/xx99-mark-two" className="bg-accent px-6 py-3 text-white rounded">
            See Product
          </Link>
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
