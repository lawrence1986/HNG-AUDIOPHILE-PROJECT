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
      {/* Product Gallery Section */}
<section className="max-w-7xl mx-auto px-6 md:px-20 mt-32 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6">
  {/* Left Column (Two stacked images) */}
  <div className="flex flex-col gap-6">
    <div className="rounded-lg overflow-hidden h-[280px] md:h-[300px] lg:h-[350px]">
      <Image
        src={product.gallery.first.desktop}
        alt={`${product.name} gallery 1`}
        width={540}
        height={350}
        className="w-full h-full object-cover"
        priority
      />
    </div>
    <div className="rounded-lg overflow-hidden h-[280px] md:h-[300px] lg:h-[350px]">
      <Image
        src={product.gallery.second.desktop}
        alt={`${product.name} gallery 2`}
        width={540}
        height={350}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Right Column (Large image same height as both combined) */}
  <div className="rounded-lg overflow-hidden h-[580px] md:h-[640px] lg:h-[720px]">
    <Image
      src={product.gallery.third.desktop}
      alt={`${product.name} gallery 3`}
      width={850}
      height={720}
      className="w-full h-full object-cover"
    />
  </div>
</section>

    </main>
  );
}
