import Image from "next/image";
import Link from "next/link";
import { products } from "../lib/products";

export default function Home() {
  return (
    <main className="bg-[#000000] text-white overflow-hidden">
      {/* ================================
          HERO SECTION
      ================================== */}
      <section className="relative flex items-center justify-start h-[600px] md:h-[720px] overflow-hidden bg-[#000000]">
        {/* === Background Images === */}
        <div className="absolute inset-0">
          {/* Desktop */}
          <Image
            src="/assets/home/desktop/image-hero.jpg"
            alt="Hero background"
            fill
            priority
            className="hidden md:block object-cover opacity-60"
          />
          {/* Tablet */}
          <Image
            src="/assets/home/tablet/image-hero.jpg"
            alt="Hero tablet"
            fill
            className="hidden sm:block md:hidden object-cover opacity-60"
          />
          {/* Mobile */}
          <Image
            src="/assets/home/mobile/image-hero.jpg"
            alt="Hero mobile"
            fill
            className="sm:hidden object-cover opacity-60"
          />
        </div>

        {/* === Gradient Overlay for Contrast === */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-transparent" />

        {/* === Hero Text Content === */}
        <div className="relative z-10 flex flex-col justify-center h-full pl-6 sm:pl-12 md:pl-36 max-w-md">
          {/* Subheading */}
          <p className="uppercase tracking-[0.6em] text-gray-400 text-sm mb-4">
            New Product
          </p>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        XX99 Mark II <br /> Headphones
      </h1>

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Experience natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast.
          </p>

          {/* CTA Button */}
          <Link
            href="/products/xx99-mark-two"
            className="inline-block bg-[#D87D4A] hover:bg-[#fbaf85] text-white px-8 py-3 uppercase tracking-widest text-sm transition"
          >
            See Product
          </Link>
        </div>
      </section>
{/* ================================
    CATEGORY CARDS SECTION (FIXED)
================================== */}
<section className="bg-[#FAFAFA] py-24">
  <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
    {/* HEADPHONES */}
    <div className="bg-[#F1F1F1] rounded-lg pt-24 pb-10 relative overflow-hidden group hover:shadow-lg transition">
      <div className="flex justify-center -mt-28 mb-4">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="Headphones"
          width={180}
          height={180}
          className="transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide text-[#000000] mb-3">
        Headphones
      </h3>
      <Link
        href="/category/headphones"
        className="text-[#D87D4A] uppercase text-sm font-semibold tracking-wider flex items-center justify-center gap-2 hover:opacity-70 transition"
      >
        Shop <span className="text-[#D87D4A] text-lg">→</span>
      </Link>
    </div>

    {/* SPEAKERS */}
    <div className="bg-[#F1F1F1] rounded-lg pt-24 pb-10 relative overflow-hidden group hover:shadow-lg transition">
      <div className="flex justify-center -mt-28 mb-4">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="Speakers"
          width={180}
          height={180}
          className="transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide text-[#000000] mb-3">
        Speakers
      </h3>
      <Link
        href="/category/speakers"
        className="text-[#D87D4A] uppercase text-sm font-semibold tracking-wider flex items-center justify-center gap-2 hover:opacity-70 transition"
      >
        Shop <span className="text-[#D87D4A] text-lg">→</span>
      </Link>
    </div>

    {/* EARPHONES */}
    <div className="bg-[#F1F1F1] rounded-lg pt-24 pb-10 relative overflow-hidden group hover:shadow-lg transition">
      <div className="flex justify-center -mt-28 mb-4">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="Earphones"
          width={180}
          height={180}
          className="transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide text-[#000000] mb-3">
        Earphones
      </h3>
      <Link
        href="/category/earphones"
        className="text-[#D87D4A] uppercase text-sm font-semibold tracking-wider flex items-center justify-center gap-2 hover:opacity-70 transition"
      >
        Shop <span className="text-[#D87D4A] text-lg">→</span>
      </Link>
    </div>
  </div>
</section>


{/* ================================
    FEATURED ZX9 SPEAKER SECTION
================================== */}
<section className="relative bg-[#D87D4A] rounded-lg mx-6 md:mx-16 my-24 py-20 md:py-28 overflow-hidden flex flex-col md:flex-row items-center justify-center text-white">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-center opacity-30" />

  {/* Product Image */}
  <div className="relative z-10 flex justify-center md:justify-start w-full md:w-1/2 mb-10 md:mb-0">
    <Image
      src="/assets/home/desktop/image-speaker-zx9.png"
      alt="ZX9 Speaker"
      width={400}
      height={480}
      className="mx-auto md:ml-16"
      priority
    />
  </div>

  {/* Text Content */}
  <div className="relative z-10 text-center md:text-left w-full md:w-1/2 px-6 md:px-12 lg:pr-24">
    <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight mb-6">
      ZX9 Speaker
    </h2>

    <p className="text-white/90 mb-10 max-w-sm mx-auto md:mx-0">
      Upgrade to premium speakers that are phenomenally built to deliver truly
      remarkable sound.
    </p>

    <Link
      href="/products/zx9-speaker"
      className="inline-block bg-black hover:bg-[#4C4C4C] text-white px-8 py-3 uppercase tracking-widest text-sm transition"
    >
      See Product
    </Link>
  </div>
</section>
{/* ================================
    ZX7 SPEAKER BANNER SECTION
================================== */}
<section className="relative bg-[#F1F1F1] rounded-lg mx-6 md:mx-16 my-24 overflow-hidden flex flex-col md:flex-row items-center justify-between">
  {/* ZX7 Speaker Image */}
  <div className="w-full md:w-1/2">
    <Image
      src="/assets/home/desktop/image-speaker-zx7.jpg"
      alt="ZX7 Speaker"
      width={700}
      height={400}
      className="object-cover w-full h-full"
      priority
    />
  </div>

  {/* Text Content */}
  <div className="w-full md:w-1/2 px-8 md:px-16 py-16 text-center md:text-left">
    <h2 className="text-3xl font-bold uppercase mb-6 text-black">
      ZX7 Speaker
    </h2>

    <Link
      href="/products/zx7-speaker"
      className="inline-block border border-black text-black px-8 py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition"
    >
      See Product
    </Link>
  </div>
</section>

{/* ================================
    YX1 EARPHONES SPLIT SECTION
================================== */}
<section className="mx-6 md:mx-16 my-20 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Left: Product Image */}
  <div className="rounded-lg overflow-hidden">
    <Image
      src="/assets/home/desktop/image-earphones-yx1.jpg"
      alt="YX1 Earphones"
      width={700}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Right: Text Content */}
  <div className="bg-[#F1F1F1] rounded-lg flex flex-col justify-center px-8 md:px-16 py-16">
    <h2 className="text-3xl font-bold uppercase mb-6 text-black">
      YX1 Earphones
    </h2>

    <Link
      href="/products/yx1-earphones"
      className="inline-block border border-black text-black px-8 py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition"
    >
      See Product
    </Link>
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

{/* ================================
    FOOTER SECTION
================================== */}
<footer className="bg-[#101010] text-white py-16 px-6 md:px-16">
  <div className="container flex flex-col gap-10">
    {/* Top row */}
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
      <h1 className="text-2xl font-extrabold uppercase tracking-wide">audiophile</h1>
      <nav className="flex flex-col md:flex-row gap-6 text-sm uppercase font-semibold tracking-wider">
        <Link href="/" className="hover:text-[#D87D4A]">Home</Link>
        <Link href="/category/headphones" className="hover:text-[#D87D4A]">Headphones</Link>
        <Link href="/category/speakers" className="hover:text-[#D87D4A]">Speakers</Link>
        <Link href="/category/earphones" className="hover:text-[#D87D4A]">Earphones</Link>
      </nav>
    </div>

    {/* Description */}
    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
      Audiophile is an all-in-one stop to fulfill your audio needs. We’re a small team of music lovers
      and sound specialists who are devoted to helping you get the most out of personal audio.
      Come and visit our demo facility – we’re open 7 days a week.
    </p>

    {/* Bottom row */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <p className="text-gray-500 text-xs md:text-sm">Copyright 2021. All Rights Reserved</p>
      <div className="flex items-center gap-6">
        <Image src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook" width={24} height={24} className="hover:opacity-70"/>
        <Image src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" width={24} height={24} className="hover:opacity-70"/>
        <Image src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram" width={24} height={24} className="hover:opacity-70"/>
      </div>
    </div>
  </div>
</footer>



     
    </main>
  );
}