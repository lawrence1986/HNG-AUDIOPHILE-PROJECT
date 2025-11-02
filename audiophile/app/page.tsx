import Image from "next/image";
import Link from "next/link";
import { products } from "../lib/products";

export default function Home() {
  return (
    <main className="bg-[#000000] text-white overflow-hidden">
      {/* === Hero Section === */}
      <section className="relative flex items-center justify-start h-[600px] md:h-[720px]">
        {/* Background image (desktop / tablet / mobile) */}
        <div className="absolute inset-0">
          <Image
            src="/assets/home/desktop/image-hero.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>

        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-transparent" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center h-full pl-6 sm:pl-12 md:pl-36 max-w-md space-y-6">
          <p className="uppercase tracking-[0.6em] text-gray-400 text-sm">
            New Product
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            XX99 Mark II<br />Headphones
          </h1>

          <p className="text-gray-300 text-base leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast.
          </p>

          <Link
            href="/products/xx99-mark-two"
            className="inline-block bg-[#D87D4A] hover:bg-[#fbaf85] text-white px-8 py-3 uppercase tracking-widest text-sm transition"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* === Product Section (optional continuation) === */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-[#f1f1f1] text-black rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={400}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {p.description}
                </p>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-accent uppercase text-sm font-medium tracking-wider hover:underline"
                >
                  See Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
