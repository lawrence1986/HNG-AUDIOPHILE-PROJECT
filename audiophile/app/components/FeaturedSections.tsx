import Image from "next/image";
import Link from "next/link";

export default function FeaturedSections() {
  return (
    <section className="space-y-12 px-6 md:px-16 py-24">
      {/* ZX9 Speaker Section */}
      <div className="bg-[#D87D4A] text-white rounded-lg overflow-hidden grid md:grid-cols-2 items-center py-16 px-8 md:px-16 relative">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            width={350}
            height={350}
            className="object-contain z-10"
          />
        </div>
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
            ZX9 Speaker
          </h2>
          <p className="text-gray-200 max-w-sm mx-auto md:mx-0">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <Link
            href="/products/zx9-speaker"
            className="inline-block bg-[#000000] hover:bg-[#4C4C4C] text-white px-8 py-3 uppercase tracking-widest text-sm transition"
          >
            See Product
          </Link>
        </div>
      </div>

      {/* ZX7 Speaker Section */}
      <div
        className="rounded-lg overflow-hidden relative h-[320px] flex items-center bg-cover bg-center px-10 md:px-20"
        style={{ backgroundImage: "url('/assets/home/desktop/image-speaker-zx7.jpg')" }}
      >
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold uppercase text-[#000000]">
            ZX7 Speaker
          </h3>
          <Link
            href="/products/zx7-speaker"
            className="inline-block border border-[#000000] text-[#000000] px-6 py-2 uppercase tracking-widest text-sm hover:bg-[#000000] hover:text-white transition"
          >
            See Product
          </Link>
        </div>
      </div>

      {/* YX1 Earphones Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={540}
            height={320}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="bg-[#F1F1F1] rounded-lg flex flex-col justify-center px-10 md:px-16 py-16">
          <h3 className="text-2xl font-bold uppercase text-[#000000] mb-6">
            YX1 Earphones
          </h3>
          <Link
            href="/products/yx1-earphones"
            className="inline-block border border-[#000000] text-[#000000] px-6 py-2 uppercase tracking-widest text-sm hover:bg-[#000000] hover:text-white transition"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
}
