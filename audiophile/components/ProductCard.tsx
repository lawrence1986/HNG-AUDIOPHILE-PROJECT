import Link from 'next/link';


export default function ProductCard({ product }: any) {
return (
<article className="border p-4 rounded">
<img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
<h3 className="font-semibold">{product.name}</h3>
<p className="text-sm text-gray-500">${product.price}</p>
<div className="mt-4">
<Link href={`/products/${product.slug}`} className="inline-block px-4 py-2 border rounded">View</Link>
</div>
</article>
);
}