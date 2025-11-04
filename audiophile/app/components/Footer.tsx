import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        {/* Top Section - Logo + Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <Link href="/" className="text-2xl font-bold uppercase tracking-widest">
            audiophile
          </Link>

          <nav className="flex flex-col md:flex-row gap-6 text-sm uppercase tracking-widest mt-6 md:mt-0">
            <Link href="/" className="hover:text-[#D87D4A] transition">Home</Link>
            <Link href="/category/headphones" className="hover:text-[#D87D4A] transition">Headphones</Link>
            <Link href="/category/speakers" className="hover:text-[#D87D4A] transition">Speakers</Link>
            <Link href="/category/earphones" className="hover:text-[#D87D4A] transition">Earphones</Link>
          </nav>
        </div>

        {/* Middle Section - Description */}
        <div className="text-gray-400 text-sm leading-relaxed max-w-2xl mt-8">
          Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team
          of music lovers and sound specialists who are devoted to helping you get the
          most out of personal audio. Come and visit our demo facility — we’re open 7 days a week.
        </div>

        {/* Bottom Section - Socials + Copy */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12">
          <p className="text-gray-500 text-sm">
            Copyright 2025. All Rights Reserved
          </p>

          <div className="flex gap-6 mt-6 md:mt-0">
            <Link href="#" aria-label="Facebook">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="hover:opacity-70 transition"
              />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                className="hover:opacity-70 transition"
              />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="hover:opacity-70 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}