import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";



export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  // ✅ unwrap params (Next.js 16 App Router requirement)
  const { slug } = await params;

  // ✅ find product by slug
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-20 py-20">
      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center">
          <Image
            src={product.image?.desktop || "/assets/shared/desktop/image-placeholder.jpg"}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain w-full h-auto p-10"
            priority
          />
        </div>

        {/* Product Details */}
        <div>
          {product.new && (
            <p className="uppercase text-[#D87D4A] tracking-[10px] text-sm mb-4">
              New Product
            </p>
          )}

          <h1 className="text-4xl md:text-[42px] font-bold uppercase leading-tight mb-6">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

          <p className="text-xl font-bold tracking-wide mb-2">
  ${product.price.toLocaleString()}
</p>

{/* Add to Cart (Client Component) */}
{/* This won’t break your Server Component rendering */}
{/* It hydrates only this section on the client */}
<div className="mt-4">
  {/* @ts-expect-error Server/Client boundary */}
  <AddToCartButton product={product} />
</div>

        </div>
      </div>

      {/* Features Section */}
      <section className="mt-32 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="uppercase text-2xl font-bold mb-6">Features</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {product.features}
          </p>
        </div>

        <div>
          <h2 className="uppercase text-2xl font-bold mb-6">In the Box</h2>
          <ul>
            {product.includes.map((item, index) => (
              <li key={index} className="flex gap-4 text-gray-600 mb-2">
                <span className="text-[#D87D4A] font-bold">{item.quantity}x</span>
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      {product.gallery && (
        <section className="mt-32 grid md:grid-cols-3 gap-6">
          <Image
            src={product.gallery.first.desktop}
            alt={`${product.name} gallery 1`}
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
          <Image
            src={product.gallery.second.desktop}
            alt={`${product.name} gallery 2`}
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
          <Image
            src={product.gallery.third.desktop}
            alt={`${product.name} gallery 3`}
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </section>
      )}

      {/* ✅ You May Also Like Section */}
      {product.others && product.others.length > 0 && (
        <section className="mt-40 text-center">
          <h2 className="uppercase text-3xl md:text-4xl font-bold mb-16">
            You May Also Like
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {product.others.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-[#F1F1F1] rounded-lg overflow-hidden mb-8 w-full flex items-center justify-center">
                  <Image
                    src={item.image.desktop}
                    alt={item.name}
                    width={350}
                    height={350}
                    className="object-contain w-full h-auto"
                  />
                </div>

                <h3 className="uppercase text-lg font-bold mb-6">{item.name}</h3>

                <Link
                  href={`/products/${item.slug}`}
                  className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase px-8 py-3 tracking-widest text-sm transition"
                >
                  See Product
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ✅ Bringing You the Best Section */}
      <section className="mt-40 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Text Block */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="uppercase text-[32px] md:text-[40px] font-bold leading-snug">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mt-6 max-w-md mx-auto md:mx-0">
            Located at the heart of New York City, Audiophile is the premier store for
            high-end headphones, earphones, speakers, and audio accessories. We have a
            large showroom and luxury demonstration rooms available for you to browse and
            experience a wide range of our products. Stop by our store to meet some of the
            fantastic people who make Audiophile the best place to buy your portable audio
            equipment.
          </p>
        </div>

        {/* Right Image */}
        <div className="rounded-lg overflow-hidden order-1 md:order-2">
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Best Audio Gear"
            width={600}
            height={600}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}
