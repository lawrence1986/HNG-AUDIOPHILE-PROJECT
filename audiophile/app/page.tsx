import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen text-black">
      {/* Hero Section */}
      <section className="relative bg-[#000000] text-white px-6 md:px-20 py-20 md:py-40 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="max-w-md">
          <p className="uppercase tracking-[10px] text-gray-400 text-sm mb-6">
            New Product
          </p>
          <h1 className="text-4xl md:text-[56px] font-bold leading-tight mb-8">
            XX99 Mark II <br /> Headphones
          </h1>
          <p className="text-gray-400 mb-10">
            Experience natural, lifelike audio and exceptional build quality made for
            the passionate music enthusiast.
          </p>
          <Link
            href="/products/xx99-mark-ii"
            className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase px-8 py-3 tracking-widest text-sm transition"
          >
            See Product
          </Link>
        </div>

        <div className="mt-16 md:mt-0 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center md:justify-end">
          <Image
            src="/assets/home/desktop/image-hero.jpg"
            alt="XX99 Mark II Headphones"
            width={650}
            height={650}
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-28 grid md:grid-cols-3 gap-8">
        {[
          { title: "Headphones", img: "/assets/shared/desktop/image-category-thumbnail-headphones.png", link: "/category/headphones" },
          { title: "Speakers", img: "/assets/shared/desktop/image-category-thumbnail-speakers.png", link: "/category/speakers" },
          { title: "Earphones", img: "/assets/shared/desktop/image-category-thumbnail-earphones.png", link: "/category/earphones" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#F1F1F1] rounded-lg flex flex-col items-center justify-center pt-20 pb-6 relative"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={180}
              height={180}
              className="absolute -top-10"
            />
            <h3 className="uppercase font-bold tracking-wide mt-20">{item.title}</h3>
            <Link
              href={item.link}
              className="text-sm tracking-wider mt-2 flex items-center gap-2 text-gray-600 hover:text-[#D87D4A]"
            >
              Shop
              <span className="text-[#D87D4A] font-bold text-lg">›</span>
            </Link>
          </div>
        ))}
      </section>

      {/* ZX9 Speaker Highlight */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-16">
        <div className="bg-[#D87D4A] text-white rounded-lg grid md:grid-cols-2 items-center overflow-hidden px-10 md:px-20 py-16">
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            width={400}
            height={400}
            className="mx-auto md:mx-0"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-[56px] font-bold uppercase mb-8">
              ZX9 Speaker
            </h2>
            <p className="text-gray-200 mb-10 max-w-md">
              Upgrade to premium speakers that are phenomenally built to deliver truly
              remarkable sound.
            </p>
            <Link
              href="/products/zx9-speaker"
              className="bg-black text-white uppercase px-8 py-3 tracking-widest text-sm hover:bg-gray-900 transition"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>

      {/* ZX7 Speaker Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-12">
        <div className="bg-[#F1F1F1] rounded-lg px-10 py-16 md:px-20 md:py-20 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-[28px] font-bold uppercase">ZX7 Speaker</h2>
          <Link
            href="/products/zx7-speaker"
            className="mt-6 md:mt-0 border border-black text-black uppercase px-8 py-3 tracking-widest text-sm hover:bg-black hover:text-white transition"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* YX1 Earphones Split */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-[#F1F1F1] rounded-lg px-10 py-16 flex flex-col justify-center">
          <h2 className="text-2xl md:text-[28px] font-bold uppercase mb-8">YX1 Earphones</h2>
          <Link
            href="/products/yx1-earphones"
            className="border border-black text-black uppercase px-8 py-3 tracking-widest text-sm hover:bg-black hover:text-white transition w-fit"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* Bringing You the Best Audio Gear */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 mt-32 grid md:grid-cols-2 gap-20 items-center">
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
