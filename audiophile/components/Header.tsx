'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Headphones', href: '/category/headphones' },
    { name: 'Speakers', href: '/category/speakers' },
    { name: 'Earphones', href: '/category/earphones' },
  ];

  return (
    <header className="bg-[#000000] text-white">
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
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === link.href
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`pb-1 border-b-2 transition ${
                  isActive
                    ? 'text-accent border-accent'
                    : 'border-transparent hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center space-x-6">
          <Link href="/cart">
            <Image
              src="/assets/cart/icon-cart.png"
              alt="Cart"
              width={25}
              height={25}
              className="cursor-pointer hover:opacity-80 brightness-0 invert"
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
          <div className="absolute top-20 left-0 w-full bg-[#000000] text-white flex flex-col space-y-6 py-6 px-8 border-t border-gray-700 md:hidden z-50">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`uppercase transition ${
                    isActive ? 'text-accent' : 'hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
