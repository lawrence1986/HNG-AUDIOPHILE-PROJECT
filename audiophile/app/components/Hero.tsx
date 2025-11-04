"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#000000] text-white overflow-hidden">
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 md:py-32">
        
        {/* Left Text Section */}
        <div className="z-10 text-center md:text-left max-w-lg space-y-6">
          <p className="text-gray-400 uppercase tracking-[10px] text-sm md:text-base">
            New Product
          </p>

          <h1 className="uppercase text-5xl md:text-6xl font-bold leading-[1.1] tracking-wide">
            XX99 Mark II
            <br />
            Headphones
          </h1>

          <p className="text-gray-400 text-[15px] leading-relaxed md:leading-7">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>

          <Link
            href="/products/xx99-mark-ii"
            className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-10 py-4 uppercase tracking-widest text-sm font-semibold transition"
          >
            See Product
          </Link>
        </div>

        {/* Hero Image Section */}
        <div className="mt-16 md:mt-0 md:flex-1 flex justify-center md:justify-end relative">
          {/* Removed background color — no box */}
          <Image
            src="/assets/home/desktop/image-hero.jpg"
            alt="XX99 Mark II Headphones"
            width={600}
            height={600}
            className="object-contain z-0 select-none"
            priority
          />
        </div>
      </div>

      {/* thin top line */}
      <div className="absolute top-[95px] left-0 right-0 h-[1px] bg-[#2C2C2C] md:block hidden" />
    </section>
  );
}
