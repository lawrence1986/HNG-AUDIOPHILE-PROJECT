import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "../../../lib/products";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="container mx-auto p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Product not found
        </h1>
        <Link href="/" className="text-accent underline">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Back link */}
      <Link
        href="/"
        className="inline-block text-gray-500 hover:text-accent mb-8 transition-colors"
      >
        Go Back
      </Link>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="flex-1">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-contain w-full bg-gray-100"
            priority
          />
        </div>

        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>

          <div className="flex items-center gap-4">
            {/* Quantity Selector (static for now) */}
            <div className="flex items-center border rounded">
              <button className="px-3 py-2 hover:bg-gray-200">-</button>
              <span className="px-4 py-2 select-none">1</span>
              <button className="px-3 py-2 hover:bg-gray-200">+</button>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-accent text-white px-6 py-3 rounded hover:opacity-90">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section (Optional Placeholder) */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              width={300}
              height={300}
              className="object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-4">ZX9 Speaker</h3>
            <Link
              href="/products/zx9-speaker"
              className="bg-accent text-white px-5 py-2 rounded"
            >
              See Product
            </Link>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
            <Image
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt="ZX7 Speaker"
              width={300}
              height={300}
              className="object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-4">ZX7 Speaker</h3>
            <Link
              href="/products/zx7-speaker"
              className="bg-accent text-white px-5 py-2 rounded"
            >
              See Product
            </Link>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
            <Image
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              width={300}
              height={300}
              className="object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-4">YX1 Earphones</h3>
            <Link
              href="/products/yx1-earphones"
              className="bg-accent text-white px-5 py-2 rounded"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}