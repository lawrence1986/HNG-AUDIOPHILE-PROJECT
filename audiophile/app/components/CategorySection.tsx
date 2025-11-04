import Image from "next/image";
import Link from "next/link";

export default function CategorySection() {
  const categories = [
    { name: "Headphones", img: "/assets/shared/desktop/image-category-thumbnail-headphones.png", link: "/category/headphones" },
    { name: "Speakers", img: "/assets/shared/desktop/image-category-thumbnail-speakers.png", link: "/category/speakers" },
    { name: "Earphones", img: "/assets/shared/desktop/image-category-thumbnail-earphones.png", link: "/category/earphones" },
  ];

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {categories.map((c) => (
          <div key={c.name} className="bg-[#F1F1F1] rounded-lg pt-20 pb-8 relative overflow-hidden group hover:shadow-lg transition">
            <div className="flex justify-center -mt-24">
              <Image
                src={c.img}
                alt={c.name}
                width={150}
                height={150}
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wide mt-6 mb-2 text-[#000000]">
              {c.name}
            </h3>
            <Link
              href={c.link}
              className="text-[#D87D4A] uppercase text-sm font-semibold tracking-wider hover:opacity-70 flex items-center justify-center gap-2"
            >
              Shop <span className="text-[#D87D4A] text-lg">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
