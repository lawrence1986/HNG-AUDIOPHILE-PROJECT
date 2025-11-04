import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.filter((p) =>
    ["zx9-speaker", "zx7-speaker", "yx1-earphones"].includes(p.slug)
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand text-white flex flex-col justify-center items-start px-8 py-24 md:py-40">
        <Image
          src="/assets/home/desktop/image-hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover opacity-40 -z-10"
        />
        <div className="max-w-lg z-10">
          <p className="uppercase tracking-widest text-gray-300 mb-4">New product</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            XX99 Mark II Headphones
          </h1>
          <p className="text-gray-200 mb-6">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/products/xx99-mark-ii"
            className="bg-accent px-6 py-3 text-white rounded"
          >
            See Product
          </Link>
        </div>
        <Image
          src="/assets/home/desktop/pattern-circles.svg"
          alt="Pattern"
          width={944}
          height={944}
          className="absolute right-[-200px] top-0 opacity-20"
        />
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-16 grid gap-8">
        {featured.map((p) => (
          <div
            key={p.slug}
            className="bg-gray-100 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between"
          >
            <img
              src={
                p.image?.desktop ||
                "/assets/shared/desktop/image-placeholder.jpg"
              }
              alt={p.name}
              className="w-64 h-64 object-contain"
            />

            <div className="text-center md:text-left md:ml-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">{p.name}</h2>
              <p className="text-gray-600 mb-6 max-w-md">{p.description}</p>

              <Link
                href={`/products/${p.slug}`}
                className="bg-accent text-white px-5 py-3 rounded uppercase tracking-wider hover:bg-accent/80 transition"
              >
                See Product
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}