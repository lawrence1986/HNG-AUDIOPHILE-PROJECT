'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-6 flex items-center justify-between h-20 border-b border-gray-700 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/logo.svg"
            alt="audiophile logo"
            width={140}
            height={30}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 uppercase tracking-widest text-sm font-semibold">
          <Link href="/" className="hover:text-accent transition">
            Home
          </Link>
          <Link href="/category/headphones" className="hover:text-accent transition">
            Headphones
          </Link>
          <Link href="/category/speakers" className="hover:text-accent transition">
            Speakers
          </Link>
          <Link href="/category/earphones" className="hover:text-accent transition">
            Earphones
          </Link>
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center space-x-6">
          <Link href="/cart">
            <Image
              src="/assets/cart/icon-cart.svg"
              alt="Cart"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-80"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/assets/hamburger.svg"
              alt="Menu"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col space-y-6 py-6 px-8 border-t border-gray-700 md:hidden z-50">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="uppercase hover:text-accent transition">
              Home
            </Link>
            <Link href="/category/headphones" onClick={() => setIsMenuOpen(false)} className="uppercase hover:text-accent transition">
              Headphones
            </Link>
            <Link href="/category/speakers" onClick={() => setIsMenuOpen(false)} className="uppercase hover:text-accent transition">
              Speakers
            </Link>
            <Link href="/category/earphones" onClick={() => setIsMenuOpen(false)} className="uppercase hover:text-accent transition">
              Earphones
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
