import Image from "next/image";
import Link from "next/link";

export default function SpeakersPage() {
  return (
    <main className="bg-[#FAFAFA]">
      {/* ================================
          HERO HEADER
      ================================== */}
      <section className="bg-[#000000] text-white text-center py-24">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          Speakers
        </h1>
      </section>

      {/* ================================
          PRODUCTS LIST
      ================================== */}
      <section className="container mx-auto px-6 md:px-16 py-24 space-y-32">
        {/* Product 1: ZX9 Speaker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="bg-[#F1F1F1] p-10 rounded-lg">
              <Image
                src="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
                alt="ZX9 Speaker"
                width={400}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left space-y-6">
            <p className="uppercase text-[#D87D4A] tracking-[8px] text-sm">
              New Product
            </p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-[#000000]">
              ZX9 Speaker
            </h2>
            <p className="text-[#7D7D7D] max-w-md mx-auto md:mx-0">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity — creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <Link
              href="/products/zx9-speaker"
              className="inline-block bg-[#D87D4A] hover:bg-[#fbaf85] text-white px-8 py-3 uppercase tracking-widest text-sm transition"
            >
              See Product
            </Link>
          </div>
        </div>

        {/* Product 2: ZX7 Speaker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          {/* Image */}
          <div className="flex justify-center md:order-2">
            <div className="bg-[#F1F1F1] p-10 rounded-lg">
              <Image
                src="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
                alt="ZX7 Speaker"
                width={400}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left space-y-6 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-[#000000]">
              ZX7 Speaker
            </h2>
            <p className="text-[#7D7D7D] max-w-md mx-auto md:mx-0">
              Stream high-quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              reproduce your favorite tracks with remarkable clarity.
            </p>
            <Link
              href="/products/zx7-speaker"
              className="inline-block bg-[#D87D4A] hover:bg-[#fbaf85] text-white px-8 py-3 uppercase tracking-widest text-sm transition"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>

      {/* ================================
          CATEGORY GRID SECTION
      ================================== */}
      <section className="bg-[#FAFAFA] py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Headphones */}
          <div className="bg-[#F1F1F1] rounded-lg pt-20 pb-8 relative overflow-hidden group hover:shadow-md transition">
            <div className="flex justify-center -mt-24">
              <Image
                src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                alt="Headphones"
                width={150}
                height={150}
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wide mt-6 mb-2 text-[#000000]">
              Headphones
            </h3>
            <Link
              href="/category/headphones"
              className="text-[#D87D4A] uppercase text-sm font-semibold tracking-wider hover:opacity-70 flex items-center justify-center gap-2"
            >
              Shop <span className="text-[#D87D4A] text-lg">→</span>
            </Link>
          </div>

          {/* Speakers */}
          <div className="bg-[#F1F1F1] rounded-lg pt-20 pb-8 relative overflow-hidden group hover:shadow-md transition">
            <div className="flex justify-center -mt-24">
              <Image
                src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                alt="Speakers"
                width={150}
                height={150}
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wide mt-6 mb-2 text-[#000000]">
              Speakers
            </h3>
            <Link
              href="/category/speakers"
              className="text-[#D87D4A] uppercase text-sm font-semibold tracking-wider hover:opacity-70 flex items-center justify-center gap-2"
            >
              Shop <span className="text-[#D87D4A] text-lg">→</span>
            </Link>
          </div>

          {/* Earphones */}
          <div className="bg-[#F1F1F1] rounded-lg pt-20 pb-8 relative overflow-hidden group hover:shadow-md transition">
            <div className="flex justify-center -mt-24">
              <Image
                src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                alt="Earphones"
                width={150}
                height={150}
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wide mt-6 mb-2 text-[#000000]">
              Earphones
            </h3>
            <Link
              href="/category/earphones"
              className="text-[#D87D4A] uppercase text-sm font-semibold tracking-wider hover:opacity-70 flex items-center justify-center gap-2"
            >
              Shop <span className="text-[#D87D4A] text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================
          BEST AUDIO GEAR SECTION
      ================================== */}
      <section className="bg-white container mx-auto px-6 md:px-16 my-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-[#000000] leading-tight mb-8">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
          </h2>

          <p className="text-[#7D7D7D] leading-relaxed max-w-md mx-auto md:mx-0">
            Located at the heart of New York City, Audiophile is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store
            to meet some of the fantastic people who make Audiophile the best place
            to buy your portable audio equipment.
          </p>
        </div>

        {/* Lifestyle Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Man wearing headphones - Best Audio Gear"
            width={540}
            height={540}
            className="rounded-lg object-cover w-full max-w-sm md:max-w-md"
            priority
          />
        </div>
      </section>
    </main>
  );
}
