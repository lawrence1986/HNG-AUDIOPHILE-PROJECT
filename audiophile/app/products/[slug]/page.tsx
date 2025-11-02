import { products } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ unwrap the promise

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="p-20 text-center">
      <h1 className="text-3xl font-bold uppercase mb-6">{product.name}</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">{product.description}</p>
    </div>
  );
}
