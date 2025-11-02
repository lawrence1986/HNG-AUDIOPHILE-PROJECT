import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="bg-[#FAFAFA] text-black min-h-screen pb-32">
      {/* Go Back */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-10">
        <Link
          href="/"
          className="text-gray-500 hover:text-[#D87D4A] transition duration-200"
        >
          Go Back
        </Link>
      </div>

      {/* Product Info */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-12 flex flex-col md:flex-row md:items-center md:gap-24">
        {/* Product Image */}
        <div className="flex-1 bg-[#F1F1F1] rounded-lg flex justify-center items-center p-12">
          <Image
            src={product.image?.desktop || "/assets/shared/desktop/image-placeholder.jpg"}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 mt-10 md:mt-0">
          {product.new && (
            <p className="uppercase tracking-[10px] text-[#D87D4A] text-sm mb-4">
              New Product
            </p>
          )}

          <h1 className="uppercase text-[32px] md:text-[40px] font-bold leading-tight">
            {product.name}
          </h1>

          <p className="text-gray-600 text-[15px] leading-relaxed mt-6 mb-8 max-w-md">
            {product.description}
          </p>

          <p className="text-black font-bold text-lg tracking-widest mb-8">
            ${product.price.toLocaleString()}
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#F1F1F1] px-3 py-2 text-sm font-semibold">
              <button className="px-3 text-gray-500 hover:text-[#D87D4A]">-</button>
              <span className="px-4">1</span>
              <button className="px-3 text-gray-500 hover:text-[#D87D4A]">+</button>
            </div>
            <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase px-8 py-3 text-sm tracking-widest transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Features + In the Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-28 grid md:grid-cols-3 gap-20">
        {/* Features */}
        <div className="md:col-span-2">
          <h2 className="uppercase text-2xl font-bold mb-6 tracking-wide">
            Features
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed whitespace-pre-line">
            {product.features}
          </p>
        </div>

        {/* In the Box */}
        <div>
          <h2 className="uppercase text-2xl font-bold mb-6 tracking-wide">
            In the Box
          </h2>
          <ul className="space-y-3">
            {product.includes.map((item: any, index: number) => (
              <li key={index} className="text-gray-600 text-[15px]">
                <span className="text-[#D87D4A] font-bold mr-3">
                  {item.quantity}x
                </span>
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-32 text-center">
        <h2 className="uppercase text-2xl font-bold mb-16 tracking-wide">
          You May Also Like
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {product.others.map((item: any, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-8 w-full">
                <Image
                  src={item.image.desktop}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <h3 className="uppercase mt-8 text-lg font-bold">{item.name}</h3>
              <Link
                href={`/products/${item.slug}`}
                className="mt-6 bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase px-8 py-3 text-sm tracking-widest transition"
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bringing You the Best Audio Gear */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-40 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Text */}
        <div>
          <h2 className="uppercase text-3xl font-bold leading-snug">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mt-6">
            Located at the heart of New York City, Audiophile is the premier store for
            high-end headphones, earphones, speakers, and audio accessories. We have a large
            showroom and luxury demonstration rooms available for you to browse and
            experience a wide range of our products. Stop by our store to meet some of the
            fantastic people who make Audiophile the best place to buy your portable audio
            equipment.
          </p>
        </div>

        {/* Right Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Best audio gear"
            width={600}
            height={600}
            className="object-cover rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}
