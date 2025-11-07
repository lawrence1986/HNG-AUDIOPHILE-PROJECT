"use client";
import Link from "next/link";
import { BigBtn } from "@/app/components/btn";


export function BigBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white uppercase px-8 py-4 tracking-widest text-sm font-semibold rounded-md transition"
    >
      {children}
    </Link>
  );
}
