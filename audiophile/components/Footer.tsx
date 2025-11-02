
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white py-16">
      <div className="container mx-auto px-6 md:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold uppercase tracking-wide mb-8 md:mb-0">
            audiophile
          </h1>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row gap-6 text-sm uppercase font-semibold tracking-wider">
            <Link href="/" className="hover:text-[#D87D4A] transition">
              Home
            </Link>
            <Link href="/category/headphones" className="hover:text-[#D87D4A] transition">
              Headphones
            </Link>
            <Link href="/category/speakers" className="hover:text-[#D87D4A] transition">
              Speakers
            </Link>
            <Link href="/category/earphones" className="hover:text-[#D87D4A] transition">
              Earphones
            </Link>
          </nav>
        </div>

        {/* Middle Section - Description */}
        <p className="text-gray-400 max-w-2xl leading-relaxed mb-10 text-center md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We’re a small team
          of music lovers and sound specialists who are devoted to helping you get the most
          out of personal audio. Come and visit our demo facility – we’re open 7 days a week.
        </p>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright 2021. All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
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
